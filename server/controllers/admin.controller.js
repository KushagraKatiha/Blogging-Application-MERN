import { User } from "../models/user.model.js";
import { Comment } from "../models/comment.model.js";
import { Post } from "../models/post.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const isUserAdmin = async (userId) => {
    const user = await User.findById(userId)

    if(user.role !== "admin"){
        return false
    }else{
        return true
    }
}

const deleteComment = asyncHandler(async (req, res) => {
    // Check if admin is logged in or not 
    const user = await User.findById(req.user._id)
    console.log(user);
    if(!user){
        throw new ApiError(400, "User not logged in !!")
    }

    // Check if user is admin or not
    const checkAdmin = await isUserAdmin(req.user._id)
    console.log(checkAdmin);

    if(!checkAdmin){
        throw new ApiError(400, "User is not an admin")
    }

    // Get comment id from req.params
    const { commentId } = req.params
    
    if(!commentId){
        throw new ApiError(400, "Comment not found !!")
    }

    // delete the comment
    await Comment.findByIdAndDelete(commentId)

    res.status(200).json(new ApiResponse(201, "Comment deleted successfully"))
})

const deletePost = asyncHandler(async (req, res) => {
    // Check if admin is logged in or not 
    const user = await User.findById(req.user._id)

    if(!user){
        throw new ApiError(400, "User not logged in !!")
    }

    // Check if user is admin or not
    const checkAdmin = await isUserAdmin(req.user._id)

    if(!checkAdmin){
        throw new ApiError(400, "User is not an admin")
    }

    // Get post id from req.params
    const { postId } = req.params
    if(!postId){
        throw new ApiError(400, "Post not found !!")
    }

    // Delete the comments 
    await Comment.deleteMany({post: postId})

    // Delete post
    const post = await Post.findByIdAndDelete(postId)

    res.status(200).json(new ApiResponse(201, "Post Deleted Successfully", post))
})

const deleteUser = asyncHandler(async (req, res) => {
    // Check if admin is logged in or not 
    const user = await User.findById(req.user._id)

    if(!user){
        throw new ApiError(400, "User not logged in !!")
    }

    // Check if user is admin or not
    const checkAdmin = isUserAdmin(req.user._id)

    if(!checkAdmin){
        throw new ApiError(400, "User is not an admin")
    }

    // Get user's (user to be deleted) id from req.params
    const { toBeDeletedUserId } = req.params
    if(!toBeDeletedUserId){
        throw new ApiError(400, "No user found")
    }

    // Get user 
    const toBeDeletedUser = await User.findById(toBeDeletedUserId)
    
    // check if user is not an admin
    if(toBeDeletedUser.role == "admin"){
        throw new ApiError(400, "Can't delete another admin's account")
    }

    // Delete all the Comments and Posts of that user
    await Comment.deleteMany({author: toBeDeletedUserId})
    await Post.deleteMany({author: toBeDeletedUserId})

    // Delete user
    await User.findByIdAndDelete(toBeDeletedUserId)

    res.status(200).json(new ApiResponse(201, "User Deleted Successfully"))
})

export {
    deleteComment,
    deletePost,
    deleteUser
}