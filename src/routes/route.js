const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController")
const batchanddeve = require("../controllers/batch&developer")


router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
});
router.post("/createBook", bookController.createBook)
router.post("/createAuthor", bookController.createAuthor)
router.post("/createPublish", bookController.createPublish)
    // router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.get('/get-all-books', bookController.fetchbook)

// router.get("/getBooksData", bookController.getBooksData)
// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
////////////////////////////////////////////////////////////////////////////////////////
router.post("/createbatch", batchanddeve.createbatch)
router.post("/createdeveloper", batchanddeve.createdeveloper)

router.get("/scholarshipdevelopers", batchanddeve.scholarshipdevelopers)
router.get("/deveLoper", batchanddeve.deveLoper)

module.exports = router;