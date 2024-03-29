import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import emailValidator from "email-validator";
import jwt from "jsonwebtoken";

const generateAccessandRefreshTokens = async (userId) => {
    const user = await User.findById(userId)

    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    user.refreshToken = refreshToken

    await user.save({validateBeforeSave: false})

    return {accessToken, refreshToken}
}

const registerUser = asyncHandler(async (req, res) => {
    const {fullname, username, email, password, role} = req.body

    if([fullname, username, email, password, role].some((field) => 
        field?.trim() === ''
    )){
        throw new ApiError(400, 'All fields are required')
    }

    if(!(emailValidator.validate(email))){
        throw new ApiError(400, 'Invalid email')
    }

    const existedUser = await User.findOne({$or: [{username}, {email}]})

    if(existedUser){
        throw new ApiError(400, 'Username or email already exists')
    }

    const user = await User.create({
        fullname,
        username,
        email,
        password,
        role
    })

    if(!user){
        throw new ApiError(500, 'Failed to create user')
    }else{
        await user.save()
    }

    res.status(201).json(new ApiResponse(200, 'User created successfully', user))
})

const loginUser = asyncHandler(async (req, res) => {
    const {email, username, password} = req.body

    if((!email || !username) && !password){
        throw new ApiError(400, 'Email/Username and password are required')
    }

    const user = await User.findOne({
        $or: [{email}, {username}]
    }).select('+password')

    if(!user){
        throw new ApiError(404, 'User not found')
    }

    const passwordMatched = await user.checkPassword(password)

    if(!passwordMatched){
        throw new ApiError(401, 'Incorrect password')
    }

    const {accessToken, refreshToken} = await generateAccessandRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id)

    const cookieOptions = {
        httpOnly: true
    }

    res.cookie('accessToken', accessToken, cookieOptions)
    res.cookie('refreshToken', refreshToken, cookieOptions)

    res.status(201).json(new ApiResponse(200, 'Login successful', loggedInUser))
})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, 
        {$set:{refreshToken: ""}}, 
        {new: true}
    )

    res.status(200)
    .clearCookie('accessToken')
    .clearCookie('refreshToken')
    .json(new ApiResponse(200, 'Logout successful'))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies?.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401, 'Unauthorized')
    }

    const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)

    if(!decodedToken){
        throw new ApiError(401, 'Invalid token or Exprierd token')
    }

    const user = await User.findById(decodedToken.id)

    if(!user){
        throw new ApiError(401, 'Invalid token')
    }

    if(user.refreshToken !== incomingRefreshToken){
        throw new ApiError(401, 'Invalid token')
    }

    const {accessToken, refreshToken} = await generateAccessandRefreshTokens(user._id)

    const cookieOptions = {
        httpOnly: true
    }

    res.status(200)
    .cookie('accessToken', accessToken, cookieOptions)
    .cookie('refreshToken', refreshToken, cookieOptions)
    .json(new ApiResponse(200, 'Token refreshed successfully'))

})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.user._id, {new: true})

    if(!user){
        throw new ApiError(404, 'User not found')
    }

    res.status(200).json(new ApiResponse(200, 'User deleted successfully'))
})

const updateUser = asyncHandler(async (req, res) => {
    const {fullname, email} = req.body
    const user = await User.findByIdAndUpdate(req.user._id, 
        {$set: {fullname, email}},
        {new: true}
    )

    if(!user){
        throw new ApiError(404, 'User not found')
    }

    res.status(200).json(new ApiResponse(200, 'User updated successfully', user))
})

const updatePassword = asyncHandler(async (req, res) => {
    const {oldPassword, newPassword, confirmPassword} = req.body

    if(newPassword !== confirmPassword){
        throw new ApiError(400, 'Passwords do not match')
    }

    const user = await User.findById(req.user._id).select('+password')
    
    const passwordMatched = await user.checkPassword(oldPassword)

    if(!passwordMatched){
        throw new ApiError(401, 'Incorrect old password')
    }

    user.password = newPassword

    await user.save({validateBeforeSave: false})

    res.status(200).json(new ApiResponse(200, 'Password updated successfully'))
})

const getUser = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, 'User fetched successfully', req.user))
})

export {
    registerUser,
    loginUser,
    logoutUser,
    deleteUser,
    updateUser,
    refreshAccessToken,
    updatePassword,
    getUser
}