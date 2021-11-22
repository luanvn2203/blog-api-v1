const userRoutes  = require('./user.routes')

let configRoutes = (app) => {
    app.use('/user', userRoutes)
    /**
     * other routes here
     */
}

export default configRoutes