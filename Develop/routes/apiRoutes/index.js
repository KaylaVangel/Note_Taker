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
    req.body.id = Date.now();
    db.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db)
      );
    res.sendStatus(201);

});

router.delete('/notes/:id', (req, res) => {
    const newDb =  db.filter(element => element.id != req.params.id);   
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(newDb)
      );

    res.sendStatus(202);
})

module.exports = router;