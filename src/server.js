require('dotenv').config();

import express from 'express'
import cors from 'cors'
import db from '../src/models/index'
import configRoutes from './routers/index'

import roleService from './services/role.service'
import categoryService from './services/category.service'
import tagService from './services/tag.service'
import mockData from './configs/mockData'

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//     roleService.addSampleRole()
//     categoryService.createNewCategories(mockData.generateSampleCategories())
//     tagService.createNewTags(mockData.generateSampleTag())
// });

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