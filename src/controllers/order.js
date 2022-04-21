const ordermodels = require("../models/orderm")
const usermodel = require("../models/users")
const productmodel = require("../models/product")


const createorder = async function(req, res, ) {
    let data = req.body
    let headers = req.headers
    let brptype = headers['isFreeAppUser']
    if (!brptype) {
        brptype = headers['isfreeappuser']
    }
    if (!brptype) {
        return res.send({ status: false, message: "A mandatory header is missing" })
    }
    let userId = data.userId
    let use = await usermodel.findById(userId)
    if (!use) {
        return res.send({ status: false, message: "user doesn't exist" })
    }

    let productId = data.productId
    let product = await productmodel.findById(productId)
    if (!product) {
        return res.send({ status: false, message: "product doesn't exist" })
    }
    let brptypefree = false
    if (brptype == 'true') {
        brptypefree = true
    }
    if (!brptypefree && use.balance >= product.balance) {
        use.balance = use.balance - product.price
        await use.save()

        data.amount = product.price
        data.isFreeAppUser = false
        let orderdetails = await ordermodels.create(data)
        res.send({ data: orderdetails })
    } else if (!brptypefree) {
        return res.send({ status: false, message: "User doesn't have sufficient balance" })
    } else {
        data.amount = 0
        data.isFreeAppUser = true
        let orderdetails = await ordermodels.create(data)
        res.send({ data: orderdetails })
    }

}
module.exports.createorder = createorder