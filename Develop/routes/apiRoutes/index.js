const router = require('express').Router();
const db = require('../../db/db.json');
const fs = require('fs');
const path = require('path');

//get api/notes from db.json//
router.get('/notes', (req, res) => {
    res.json(db);
});



//post api/notes added to db.json and returned to client 
router.post('/notes', (req, res) => { 
    console.log(req.body);
    db.push(req.body);
    console.log(db);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db , null, 2)
      );
    res.json(db);

});

module.exports = router;