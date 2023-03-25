const express = require('express');
const router = express.Router();
const { Posts } = require("../models");

// Asks for information from the database
router.get('/', async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

// Sends information to the database
router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

module.exports = router;