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
    const getdetails = req.query
    const data = await developmodel.find({ percentage: { $gte: getdetails.percentage } }).select({ batch: 1, _id: 0 })
    const find = await batchmodel.find({ _id: data[0].batch, program: getdetails.program })
    res.send({ data: find })
}

module.exports.createbatch = createbatch
module.exports.createdeveloper = createdeveloper
module.exports.scholarshipdevelopers = scholarshipdevelopers
module.exports.deveLoper = deveLoper