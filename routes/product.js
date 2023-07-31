const express = require('express');
const router = express.Router()

// controller funcctions of routes
const productController = require("../controller/product")


// all routes of products
router.post('/', productController.createProduct)
    .get('/', productController.getAllproducts)
    .get('/:id', productController.getProduct)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)

exports.router = router;