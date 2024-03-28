import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import emailValidator from "email-validator";

const registerUser = asyncHandler(async (req, res) => {
    const {fullname, username, email, password, role} = req.body

    if([fullname, username, email, password, role].some((field) => {
        field?.trim() === ''
    })){
        throw new ApiError(400, 'All fields are required')
    }

    if(!(emailValidator.validate(email))){
        throw new ApiError(400, 'Invalid email')
    }

    const existedUser = User.findOne({
        $or: [{username}, {email}]
    })

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
        user.save()
    }

    res.status(201).json(new ApiResponse(200, 'User created successfully', user))
})