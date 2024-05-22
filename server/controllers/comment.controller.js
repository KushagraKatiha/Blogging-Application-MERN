import { Comment } from '../models/comment.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import { Post } from '../models/post.model.js';

const createComment = asyncHandler(async (req, res) => {
    // Check If User is Logged In or not
   try {
     if(!req.user){
         throw new ApiError(401, 'Unauthorized')
     }
 
     // If user is logged get post details from reques params
     const { postId } = req.params
     if(!postId){
         throw new ApiError(400, 'Open a post to comment on !!')
     }
 
     // Get comment content from the req.body
     const { content } = req.body
     // Check if content is provided
     if(!content){
         throw new ApiError(400, 'Comment content is required')
     }
 
     // Create a new comment
     const comment = await Comment.create({
         content,
         post: postId,
         author: req.user._id
     })
 
     // Save the comment to the database
     if(!comment){
         throw new ApiError(500, 'Failed to create comment', false)
     }else{
         await comment.save()
     }
 
     // Save the comment to the post
     const post = await Post.findById(postId)
 
     post.comments.push(comment._id)
 
     await post.save()
 
     // Send response to the client
     res.status(200).json(new ApiResponse(200, 'Comment created successfully', comment))
   } catch (error) {
     res.status(500).json(error)
   }
})

const getComments = asyncHandler(async (req, res) => {
    // Get all the comments of the post
    const { postId } = req.params

    try {
        if(!postId){
            throw new ApiError(400, 'Open a post to view comments')
        }
    
        const comments = await Comment.find({post: postId}).populate('author')
        if(!comments){
            throw new ApiError(404, 'No comments on this post !!')
        }
    
        // Send response to the client
        res.status(200).json(new ApiResponse(200, 'Comments retrieved successfully', comments))
    } catch (error) {
        res.status(500).json(error)
    }
})

export {
    createComment,
    getComments
}