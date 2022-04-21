const productmodel = require('../models/product')

const createProduct = async function(req, res) {
    let body = req.body
    let productcreated = await productmodel.create(body)
    res.send({ data: productcreated })
}







// const basic = async function(req, res) {
//     let tokenDataInHeaders = req.headers.token
//     console.log(tokenDataInHeaders)
//         //counter
//     console.log("HEADER DATA ABOVE")
//     console.log("hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)" })

// }
// const createAuser = function(req, res) {
//     let reqbody = req.body
//     let headers = req.headers
//     let batchheader = req.headers["batch"]
//     let contentheader = req.headers['content-type']

//     console.log('here ur batchheader', batchheader)
//     console.log('here u r before header', headers)
//     console.log('This is request body!', reqbody)
//     req.headers['month'] = 'april'
//     console.log('this content type header', contentheader)
//     console.log('this after header', headers)
//     console.log('this is todays day', req['current-day'])
//     res.send("just create a user first")
// }

// module.exports.basic = basic
// module.exports.createAuser = createAuser
module.exports.createProduct = createProduct