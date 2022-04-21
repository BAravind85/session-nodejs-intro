const express = require('express');
const router = express.Router();
const middleW = require("../controllers/productcontroller")
const usercontroll = require("../controllers/userdetails")
const ordercontroll = require("../controllers/order")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
});
// const api = function(req, res, next) {
//     console.log("This is Aravind")
//     next()
// }

// router.get("/api", api, middleW.basic)
// router.post("/create-a-user", middleW.createAuser)



router.post("/createproduct", middleW.createProduct)
router.post("/createuser", usercontroll.createUsers)
router.post("/createorder", ordercontroll.createorder)
module.exports = router;