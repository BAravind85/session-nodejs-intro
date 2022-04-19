const batchmodel = require("../models/batches")
const developmodel = require("../models/developers")


const createbatch = async function(req, res) {
    let Batch = req.body
    let batchCreated = await batchmodel.create(Batch)
    res.send({ data: batchCreated })
}

const createdeveloper = async function(req, res) {
    let develop = req.body
    let developcreate = await developmodel.create(develop)
    res.send({ data: developcreate })
}
const scholarshipdevelopers = async function(req, res) {
    let schdevel = await developmodel.find({ percentage: { $gte: 70 }, gender: "male" })
    res.send({ data: schdevel })

}
const deveLoper = async function(req, res) {
    const value1 = req.query.percentage
    const value2 = req.query.Batch
    const data = await developmodel.find({ percentage: { $gte: value1 }, Batch: value2 })
    res.send(data)
}
const basic = async function(req, res) {
    console.log("Hi your in Handler now")
    res.send("Hello ur first middleware gonna work")
}

module.exports.createbatch = createbatch
module.exports.createdeveloper = createdeveloper
module.exports.scholarshipdevelopers = scholarshipdevelopers
module.exports.deveLoper = deveLoper
module.exports.basic = basic