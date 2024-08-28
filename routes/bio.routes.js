const express = require("express");
const router = express.Router();
const Bio = require("../models/Bio.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")

router.get("/bio", (req, res) => {
    Bio.find()
        .then((bioData) => {
            res.status(200).json(bioData)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't retrieve the bio's information."})
        })
})

router.put("/bio", isAuthenticated, (req, res) => {
    const updatedBio = req.body;
    Bio.findOneAndUpdate({}, updatedBio, {new: true})
        .then((newBio) => {
            res.status(200).json(newBio);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't update the bio."})
        })
})

module.exports = router