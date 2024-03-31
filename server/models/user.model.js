import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'
import crypto from 'crypto'
import JWT from 'jsonwebtoken'

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
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false
    }, 

    refreshToken: {
        type: String,
        select: false
    },

    forgetPasswordToken: {
        type: String,
        select: false
    },

    forgetPasswordTokenExpiry: {
        type: Date,
        select: false
    }
}, {timestamps: true})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()

    this.password = await bcryptjs.hash(this.password, 10)
    next()
})

userSchema.methods.checkPassword = async function(password){
    return await bcryptjs.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return JWT.sign({
        id: this._id
    }, process.env.ACCESS_TOKEN_SECRET, 
    {expiresIn: process.env.ACCESS_TOKEN_EXPIRY})
}

userSchema.methods.generateRefreshToken = function(){
    return JWT.sign({
        id: this._id
    }, process.env.REFRESH_TOKEN_SECRET, 
    {expiresIn: process.env.REFRESH_TOKEN_EXPIRY})
}

userSchema.methods.generateForgetPasswordToken = async function(){
    const resetToken = crypto.randomBytes(20).toString('hex');

    this.forgetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.forgetPasswordTokenExpiry = Date.now() + 15 * 60 * 1000;

    return resetToken;
}

export const User = mongoose.model("User", userSchema)