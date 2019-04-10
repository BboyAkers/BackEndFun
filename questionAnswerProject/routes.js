'use strict';

const express = require('express');
const router = express.Router();

// GET /questions
router.get("/", (req, res) =>{
    //Return all questions
    res.json({response: "You sent a GET request"});
});


// POST /questions
router.post("/", (req, res) =>{
    //Return all questions
    res.json({
        response: "You sent a POST request",
        body: req.body
    });
});


// GET /questions/:id
router.get("/:qID", (req, res) =>{
    res.json({
        response: `You sent a GET request for question ID ${req.params.qID}`,
    });
});

// POST /questions
router.post("/:qID/answers", (req, res) =>{
    //Return all questions
    res.json({
        response: "You sent a POST request to /answers",
        questionId: req.params.qID,
        body: req.body
    });
});

// PUT /questions/:qID/answers/:aID
// Edit a specific answer
router.put('/:qID/answers/:aID', (req, res) =>{
    res.json({
        response: "You sent a POST request to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID,
    });
});

// DELETE /questions/:qID/answers/:aID
router.delete('/:qID/answers/:aID', (req, res) =>{
    res.json({
        response: "You sent a DELETE request to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID,
    });
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
router.post('/:qID/answers/:aID/vote-:dir',
    (req, res) =>{
        if(req.params.dir.search(/^(up|down)$/) === -1){
            const err = new Error('Not Found');
            err.status = 404;
            next(err);
        } else{
            next();
        }
    }, (req, res) =>{
    res.json({
        response: `You sent a POST request to /vote- ${req.params.dir}`,
        questionId: req.params.qID,
        answerId: req.params.aID,
        vote: req.params.dir
    });
});

module.exports = router;