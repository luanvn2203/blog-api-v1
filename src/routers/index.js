import userRoutes from './user.routes'
import postRoutes from './postRoutes'

let configRoutes = (app) => {
    app.use('/user', userRoutes)
    app.use('/post', postRoutes)

    /**
     * other routes here
     */
}

export default configRoutes