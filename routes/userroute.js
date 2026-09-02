const express = require('express');
const user1Table = require('../models/usermodel');
const usercontroller = require('../controllers/usercontroller');
const activeTable = require('../models/activemodel');
const activecontroller = require('../controllers/activecontroller');
const router = express.Router();

router.get('/user', usercontroller.getUser);

router.get('/user/:id', usercontroller.getUserById);

router.post('/user/post', usercontroller.postUser);

router.put('/user/put/:id', usercontroller.putUser);

router.delete('/user/delete/:id', usercontroller.deleteUser)

//active user
router.post('/activeuser/post', activecontroller.postUser);

router.get('/activeuser/get', activecontroller.getUser);

router.get('/activeuser/get/:id', activecontroller.getUserById);


module.exports = router;