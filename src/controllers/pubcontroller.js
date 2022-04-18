const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createPublish = async function(req, res) {
    let book = req.body
    let pubCreated = await pubcontroll.create(book)
    res.send({ data: pubCreated })
}

const getpubData = async function(req, res) {
    let books = await pubcontroll.find()
    res.send({ data: books })
}
module.exports.createPublish = createPublish
module.exports.getpubData = getpubData