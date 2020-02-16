const express = require('express');

const UserCtrl = require('./user-ctrl');

const router = express.Router();

router.put('/user', UserCtrl.createUser);
router.put('/user/:id', UserCtrl.updateUser);
router.delete('/user/:id', UserCtrl.deleteUser);
router.get('/user/:id', UserCtrl.getUserById);
router.put('/users', UserCtrl.getUsers);

module.exports = router;
