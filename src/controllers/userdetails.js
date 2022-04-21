const userdetails = require("../models/users")

const createUsers = async function(req, res) {
    let data = req.body
    let headers = req.headers
    let arutype = headers['isFreeAppUser']
    if (!arutype) {
        let arutype = headers['isfreeappuser']
        if (!arutype) {
            return res.send({ status: false, message: "The header is mandatory it is missing" })
        }
    }

    let dataofuser = await userdetails.create(data)
    res.send({ status: true, data: dataofuser })
}
module.exports.createUsers = createUsers