const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const releaseSchema = new Schema ({
    title: {type: String, required: true},
    releaseDate: {type: Date, default: Date.now()},
    producer: {type: String, required:true},
    imageUrl: {type: String},
    linkToPlatform: {type: String }

})

const Release = mongoose.model("Release", releaseSchema)

module.exports = Release