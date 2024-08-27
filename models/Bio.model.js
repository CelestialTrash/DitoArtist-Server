const mongoose = require("mongoose");
const Schema = mongoose.Schema

const bioSchema = new Schema ({
    displayName: {type: String, required:true},
    bio: {type: String},
    socials: {
        spotify: {type: String},
        appleMusic: {type: String},
        soundcloud: {type: String},
        youtube: {type: String},
        instagram: {type: String},
        x: {type: String},
        tiktok: {type: String},
        facebook: {type: String},
    }
})

const Bio = mongoose.model("Bio", bioSchema)

module.exports = Bio