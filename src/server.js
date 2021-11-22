require('dotenv').config();

import express from 'express'
import cors from 'cors'
import db from '../src/models/index'
import configRoutes from './routers/index'

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

const app = express()

const PORT = process.env.APP_PORT || 8080;

var corsOptions = {
    origin: `http://${process.env.APP_HOST}:3000`
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

configRoutes(app)

app.listen(PORT, process.env.APP_HOST, () => {
    console.log(`Hello, Server running at port ${PORT} and host ${process.env.APP_HOST}`)
    
})