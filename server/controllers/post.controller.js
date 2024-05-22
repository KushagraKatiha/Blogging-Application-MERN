import {Post} from "../models/post.model.js";     
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { Comment } from "../models/comment.model.js";

const createPost = asyncHandler(async (req, res) => {
    // Check If User is Logged In or not
   try {
     if(!req.user){
         throw new ApiError(401, 'Unauthorized')
     }
 
     // If user is logged in get post details form the request body
     const {title, content, category} = req.body
     // Check if all fields are provided
     if([title, content, category].some((field) => field?.trim() === '')){
         throw new ApiError(400, 'All fields are required', false)
     }
 
     // Create Post with the users user id as the author
     const post = await Post.create({
         title,
         content,
         category,
         author: req.user._id
     })
 
     // Save the post to the database
     if(!post){
         throw new ApiError(500, 'Failed to create post')
     }else{
         await post.save()
     }
     // Send response to the client
 
     res.status(200).json(new ApiResponse(200, 'Post created successfully', post))
   } catch (error) {
    res.status(500).json(error)
   }
})

const getPosts = asyncHandler(async (req, res) => {
    // Get all the posts form the database 
    const posts = await Post.find().populate('author').populate('comments')

    if(!posts){
        throw new ApiError(404, 'No posts found')
    }

    // Send response to the client
    res.status(200).json(new ApiResponse(200, 'Posts retrieved successfully', posts))
})

const getSinglePost = asyncHandler(async (req, res) => {
    // Get the post id from the request params
    const { postId } = req.params
    const post = await Post.findById(postId).populate('author').populate('comments')
    
    try {
        if(!post){
            throw new ApiError(404, 'Post not found')
        }

        res.status(200).json(new ApiResponse(200, 'Post retrieved successfully', post))
    } catch (error) {
        res.status(500).json(error)
    }
})

const getUserPosts = asyncHandler(async (req, res) => {
    // Check if user is loggedIn or not
    if(!req.user){
        throw new ApiError(401, 'Unauthorized')
    }

    // Get all the posts of the logged in user
    const userPosts = await Post.find({author: req.user._id})
    if(!userPosts){
        throw new ApiError(404, 'No posts found')
    }

    // Send response to the client
    res.status(200).json(new ApiResponse(200, 'User posts retrieved successfully', userPosts))
})

const deleteUserPost = asyncHandler(async (req, res) => {
    // Check if user is loggedIn or not
    if(!req.user){
        throw new ApiError(401, 'Unauthorized')
    }

    // Get the post id from the request params
    const { postId } = req.params

    // Find the post by id
    const post = await Post.findById(postId)

    if(!post){
        throw new ApiError(404, 'Post not found')
    }

    // Check if the post belongs to the logged in user
    if(post.author.toString() !== req.user._id.toString()){
        throw new ApiError(401, 'Unauthorized')
    }

    // Delete all the comments of the post
    await Comment.deleteMany({post: postId})

    // Delete the post
    await Post.findByIdAndDelete(postId)


    // Send response to the client
    res.status(200).json(new ApiResponse(200, 'Post deleted successfully'))
})

const updatePost = asyncHandler(async (req, res) => {
    // Check if user is loggedIn or not
    if(!req.user){
        throw new ApiError(401, 'Unauthorized')
    }

    const {title, content, category} = req.body

    if([title, content, category].some((field) => field?.trim() === '')){
        throw new ApiError(400, 'All fields are required')
    }

    // Get the post id from the request params
    const { postId } = req.params

    // Find the post by id
    const post = await Post.findById(postId)

    if(!post){
        throw new ApiError(404, 'Post not found')
    }

    // Check if the post belongs to the logged in user
    if(post.author.toString() !== req.user._id.toString()){
        throw new ApiError(401, 'Unauthorized')
    }

    // Update the post
    await Post.findByIdAndUpdate(postId, 
        {$set: {title, content, category}},
        {new: true})

    // Send response to the client
    res.status(200).json(new ApiResponse(200, 'Post updated successfully'))
})

const searchPosts = asyncHandler(async (req, res) => {
    // Get the category from the req.body
    const { category } = req.body

    // Find all the posts with the category
    const posts = await Post.find({category})

    if(!posts){
        throw new ApiError(404, 'No posts found from the given category')
    }

    // Send response to the client
    res.status(200).json(new ApiResponse(200, 'Posts retrieved successfully', posts))
})

export {
    createPost,
    getPosts,
    deleteUserPost,
    getUserPosts,
    updatePost,
    searchPosts,
    getSinglePost
}