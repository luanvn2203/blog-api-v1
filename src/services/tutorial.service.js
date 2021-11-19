const db = require("../models/index");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


let createNewTutorial = (item) => {
    return new Promise(async (resolve, reject) => {
        Tutorial.create(item)
            .then(data => {
                return resolve("Success")
            })
            .catch(err => {
                // res.status(500).send({
                //     message:
                //         err.message || "Some error occurred while creating the Tutorial."
                // });
                reject(err.message)
            });
    })
}

let addSampleTutorialData = () => {
    return new Promise(async (resolve, reject) => {
        let arr = []
        for (let index = 0; index < 10; index++) {
            arr.push({
                title: `title - ${index}`,
                description: `This is description of ${index}`,
                published: false,
                categoryId: 1
            })
        }
        Tutorial.bulkCreate(arr)
            .then(data => {
                return resolve("Success")
            })
            .catch(err => {
                // res.status(500).send({
                //     message:
                //         err.message || "Some error occurred while creating the Tutorial."
                // });
                reject(err.message)
            });
    })
}

module.exports = {
    createNewTutorial: createNewTutorial,
    addSampleTutorialData: addSampleTutorialData
}