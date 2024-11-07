const express = require('express'); 
const router = express.Router(); //router function 

const {createUser} = require('../controllers/userControls'); //import createUser from  ./controllers



router.get('/', (req, res) => {
    res.json({msg: "Single user"});
});

router.get('/:id', (req, res) => {
res.json({msg: "Get all users"});
});
/*
//post
router.post('/', (req, res) => {
    res.json({msg: "post msg received"});
});
*/
router.post('/', createUser)
// router.post('/:id', (req, res) => {
// res.json({msg: "post to all users"});
// });

//delete user
router.delete('/', (req, res) => {
    res.json({msg: "user deleted!"});
});
router.delete('/:id', (req, res) => {
    res.json({msg: "all users deleted!"});
});

//update
router.patch('/', (req, res) => {
    res.json({msg: "message updated for single user!"});
});

router.patch('/:id', (req, res) => {
res.json({msg: "update all users"});
});
module.exports = router; //router function exported