const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Review = require('../models/reviewSchema')

router.post('/review', async (req, res) => {

    const { username, userreview } = req.body;

    try {
        let review = new Review({
            username: username,
            userreview: userreview
        })
        await review.save();
        return res.status(200).json({ type: "success", message: "user review stored successfully"});
    }
    catch (err) {
        return res.status(400).json({ type: "danger", message: "some internal error occured", err: err });
    }

})

router.get('/fetchallreviews', async (req, res) => {
    try {
        const reviews = await Review.find({});
         res.json(reviews);
    }
    catch (err) {
        return res.status(400).json({ type: "danger", message: "some internal error occured", err: err });
    }
})

module.exports = router;