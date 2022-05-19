const router = require('express').Router();
const { notes } = require('../notes');


//get api/notes from db.json//
router.get('/notes', (req, res) => {

});



//post api/notes added to db.json and returned to client 
router.post('/notes', (req, res) => { console.log (req.body);
// req.body.title = notes.length.toString();

// if(req.body ===null) {
//     res.status(400).send('Please fill out Title for note');
// } else {
//     res.
// }
});

module.exports = router;