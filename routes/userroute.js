const express = require('express');
const user1Table = require('../models/usermodel');
const usercontroller = require('../controllers/usercontroller');
const activeTable = require('../models/activemodel');
const activecontroller = require('../controllers/activeusercontroller');
const authenticationToken = require('../middleware/authMiddleware');
const router = express.Router();

// Public Routes
// register
router.post('/activeuser/post', activecontroller.postUser);
//login
router.post('/activeuser/login', activecontroller.loginActiveuser);
router.post('/activeuser/getuserbyemail', activecontroller.getUserByEmail);
router.put('/activeuser/updatepassword/:id', activecontroller.updatePassword);


// Protected Route

router.use('/user', authenticationToken);

router.get('/user', usercontroller.getUser);

router.get('/user/:id', usercontroller.getUserById);

router.post('/user/post', usercontroller.postUser);

router.put('/user/put/:id', usercontroller.putUser);

router.delete('/user/delete/:id', usercontroller.deleteUser)

//active user
// router.post('/activeuser/post', activecontroller.postUser);

router.get('/activeuser/get', authenticationToken, activecontroller.getUser);

router.get('/activeuser/get/:id', authenticationToken, activecontroller.getUserById);

router.put('/activeuser/update/:id', authenticationToken, activecontroller.update);

router.delete('/activeuser/delete/:id', authenticationToken, activecontroller.softDelete);

router.delete('/activeuser/harddelete/:id', authenticationToken, activecontroller.hardDelete);

module.exports = router;