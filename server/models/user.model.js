import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Fullname must be at least 3 characters long']
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long']
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [3, 'Email must be at least 3 characters long']
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, 'Password must be at least 6 characters long']
    }
})

export const User = mongoose.model("User", userSchema)