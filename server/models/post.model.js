import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Title must be at least 3 characters long']
    },
    
    content:{
        type: String,
        required: true,
        trim: true,
        minlength: [10, 'Content must be at least 10 characters long']
    },

    category:{
        type: String,
        required: true,
        enum: ['news', 'tech', 'health', 'sport', 'entertainment'],
        default: 'news'
    },

    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],

    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

export const Post = mongoose.model("Post", postSchema)