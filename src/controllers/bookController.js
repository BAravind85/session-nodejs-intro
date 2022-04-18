const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const pubcontroll = require("../models/publisher")

//create book
const createBook = async function(req, res) {
        let book = req.body
        let authorid = book.author_id
        if (!authorid) {
            return res.send({ msg: "Author id not found in requested data." })
        }
        let authorId = await authorModel.findById(authorid)
        if (!authorId) {
            return res.send({ msg: "Author id is not valid" })
        }
        let puBlisherid = book.publisher_id
        if (!puBlisherid) {
            return res.send({ msg: "Publisher not found in requested data." })
        }
        let publishe = await pubcontroll.findById(puBlisherid)
        if (!publishe) {
            return res.send({ msg: "Publisher id is not valid" })
        }
        let bookCreated = await bookModel.create(book)
        res.send({ data: bookCreated })
    }
    //create author
const createAuthor = async function(req, res) {
        let author = req.body
        let authorCreated = await authorModel.create(author)
        res.send({ data: authorCreated })
    }
    //create publisher
const createPublish = async function(req, res) {
        let book = req.body
        let pubCreated = await pubcontroll.create(book)
        res.send({ data: pubCreated })
    }
    //fetch all books with authorid and publisherid
    // const getBooksWithAuthorDetails = async function(req, res) {
    //     let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    //     res.send({ data: specificBook })
    // }
const fetchbook = async function(req, res) {
    let booKs = await bookModel.find().populate('author_id publisher_id')
    res.send({ data: booKs })
}



module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.createPublish = createPublish
    // module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.fetchbook = fetchbook