const router = require('express').Router();
// const { notes } = require('../notes');

//get * index html file//
router.get('/index', (req, res) => {
    // res.json(index);
});

//get/notes html file//
    router.get('/notes', (req, res) => {
        // res.json(notes);
    });

//get api/notes from db.json//




//post api/notes added to db.json and returned to client 

module.exports = router;