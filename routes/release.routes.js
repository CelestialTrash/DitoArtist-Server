const express = require("express");
const router = express.Router();
const Release = require("../models/Release.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")


router.post("/releases", isAuthenticated, (req, res) => {
    Release.create(req.body)
        .then((release) => {
            res.status(201).json(release)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't post the release."})
        })
})

router.get("/releases", (req, res) => {
    Release.find()
        .sort({ releaseDate: -1 }) // Sort by releaseDate in descending order
        .limit(1) // Limit the result to the most recent release
        .then((releases) => {
            res.status(200).json(releases)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't retrieve the releases."})            
        })
})

router.get("/releases/:releaseId", (req, res) => {
    const { releaseId } = req.params
    Release.findById(releaseId)
        .then((release) => {
            res.status(200).json(release)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't retrieve the release."})            
        })
})

router.put("/releases/:releaseId", isAuthenticated , (req, res) => {
    const { releaseId } = req.params
    const updatedRelease = req.body
    Release.findByIdAndUpdate(releaseId, updatedRelease, {new: true})
        .then((release) => {
            res.status(200).json(release)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't update the release."})            
        })
})

router.delete("/releases/:releaseId", isAuthenticated, (req, res) => {
    const { releaseId } = req.params
    Release.findByIdAndDelete(releaseId)
        .then(() => {
            res.status(202).json({message: "The release has been deleted."})
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({message: "Couldn't delete the release."})            
        })
})

module.exports = router