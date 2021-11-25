import jwt, { decode } from 'jsonwebtoken'
import { CLIENT_ERROR_STATUS } from '../configs/httpStatusCode';

export const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(CLIENT_ERROR_STATUS.UNAUTHORIZED)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.email = decoded.email
        req.signInUser = decoded
        next()
    } catch (error) {
        return res.status(CLIENT_ERROR_STATUS.FORBIDDEN).json({
            errors: error.message
        })

    }
}

export const isUser = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(CLIENT_ERROR_STATUS.UNAUTHORIZED)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded.roleId === 1) {
            return res.status(CLIENT_ERROR_STATUS.FORBIDDEN).json({
                errors: 'No permission'
            })
        }
        req.email = decoded.email
        req.signInUser = decoded
        next()
    } catch (error) {
        return res.status(CLIENT_ERROR_STATUS.FORBIDDEN).json({
            errors: error.message
        })

    }
}

export const isAdministrator = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(CLIENT_ERROR_STATUS.UNAUTHORIZED)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded.roleId)
        if (decoded.roleId !== 2) {
            return res.status(CLIENT_ERROR_STATUS.FORBIDDEN).json({
                errors: 'No permission'
            })
        }
        req.email = decoded.email
        req.signInUser = decoded
        next()
    } catch (error) {
        return res.status(CLIENT_ERROR_STATUS.FORBIDDEN).json({
            errors: error.message
        })

    }
}

export const isModerator = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(CLIENT_ERROR_STATUS.UNAUTHORIZED)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded.roleId === 3) {
            return res.status(CLIENT_ERROR_STATUS.FORBIDDEN).json({
                errors: 'No permission'
            })
        }
        req.email = decoded.email
        req.signInUser = decoded
        next()
    } catch (error) {
        return res.status(CLIENT_ERROR_STATUS.FORBIDDEN).json({
            errors: error.message
        })

    }
}