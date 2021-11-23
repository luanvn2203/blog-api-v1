import jwt from 'jsonwebtoken'
import { CLIENT_ERROR_STATUS } from '../configs/httpStatusCode';

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(CLIENT_ERROR_STATUS.UNAUTHORIZED)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.email = decoded.email
        next()
    } catch (error) {
        return res.status(CLIENT_ERROR_STATUS.FORBIDDEN).json({
            errors: error.message
        })

    }
}

module.exports = verifyToken;