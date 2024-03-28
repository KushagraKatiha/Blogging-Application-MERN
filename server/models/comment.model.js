import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        trim: true,
        minlength: [10, 'Content must be at least 10 characters long']
    },
    
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },

    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps: true})

export const Comment = mongoose.model("Comment", commentSchema)