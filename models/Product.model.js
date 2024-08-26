
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const productSchema = new Schema ({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    imageUrl: {type: [String]},
    size: {type: String},
    materials: {type: String}
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product