const { count } = require("console")
const BookModel = require("../models/bookModel")


const createBook = async function(req, res) {
    try {
        let data = req.body
        console.log(data)
        if (Object.keys(data).length != 0) {
            let savedData = await BookModel.create(data)
            res.status(201).send({ msg: savedData })
        } else res.status(400).send({ msg: "BAD REQUEST" })
    } catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}
module.exports.createBook = createBook