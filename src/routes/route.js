const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const middleMW = require("../middleware/auth")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middleMW.validation, userController.getUserData)

router.put("/users/:userId", middleMW.validation, userController.updateUser)

router.delete("/user/:userId", middleMW.validation, userController.deleteuser)

router.post("/user/:userId/posts", userController.postmessage)

module.exports = router;