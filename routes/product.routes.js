const express = require("express");
const router = express.Router();
const Product = require("../models/Product.model")


router.post("/products", (req, res) => {
    Product.create(req.body)
        .then((product) => {
            res.status(201).json(product)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't post the product."})
        })
})

router.get("/products", (req, res) => {
    Product.find()
        .then((products) => {
            res.status(200).json(products)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't retrieve the products."})            
        })
})

router.get("/products/:productId", (req, res) => {
    const { productId } = req.params
    Product.findById(productId)
        .then((product) => {
            res.status(200).json(product)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't retrieve the product."})            
        })
})

router.put("/products/:productId", (req, res) => {
    const { productId } = req.params
    const updatedProduct = req.body
    Product.findByIdAndUpdate(productId, updatedProduct, {new: true})
        .then((product) => {
            res.status(200).json(product)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't update the product."})            
        })
})

router.delete("/products/:productId", (req, res) => {
    const { productId } = req.params
    Product.findByIdAndDelete(productId)
        .then(() => {
            res.status(202).json({message: "The product has been deleted."})
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't delete the product."})            
        })
})

module.exports = router