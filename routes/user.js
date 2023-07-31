const express = require('express');
const router = express.Router()

// controller funcctions of routes
const userController = require("../controller/user")


// all routes of products
router.post('/', userController.createUser)
    .get('/', userController.getAllUsers)
    .get('/:id', userController.getUser)
    .put('/:id', userController.replaceUser)
    .patch('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser)

exports.router = router;