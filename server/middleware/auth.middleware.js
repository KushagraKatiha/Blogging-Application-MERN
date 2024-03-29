import jwt from 'jsonwebtoken'
import ApiError from '../utils/ApiError.js'
import { User } from '../models/user.model.js'

const jwtAuth = async (req, _, next) => {
    try {
        const accessToken = req.cookies?.accessToken
           
        if(!accessToken){
            throw new ApiError(401, 'Unauthorized')
        }
    
        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    
        if(!decodedToken){
            throw new ApiError(401, 'Unauthorized')
        }
    
        const user = await User.findById(decodedToken.id)
    
        if(!user){
            throw new ApiError(401, 'Unauthorized')
        }
    
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, error.message || 'Unauthorized')
    }
}

export default jwtAuth