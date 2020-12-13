const express = require('express');

const router = express.Router();

//CRUD
//Create POST
    //- query string
    // => localhost:8080/user/data?userid=2
    //- param
    // => localhost:8080/user/data/2
    //- body
    // => localhost:8080/user/data
    //      => req.body {data}
//Read GET
//Update PATCH/PUT
//Delete DELETE

// router.get('/queryStr', (req, res)=>{
//     console.log(req.query);
//     const {userId, message} = req.query;
//     console.log(userId, message);
//     res.json({message: "Test" , data:req.query});
// });

// router.get('/param/:userId/:message', (req, res)=>{
//     const {userId, message} = req.params;
//     console.log(userId, message);
// });

const userController = require('../controllers/user');

router.post('/add', userController.addUsers);

router.get('/', userController.getUsers);

router.patch('/update/:userId', userController.updateUser);

router.delete('/delete/:userId', userController.deleteUser);

module.exports = router