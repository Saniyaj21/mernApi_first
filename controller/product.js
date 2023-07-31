const model = require('../model/product')
const Product = model.Product

exports.createProduct = (req, res) => {
    const product = new Product(req.body);
    // product.save((err, doc) => {
    //     if (err) {
    //         res.status(400).json(err)
    //     } else {
    //         res.status(201).json(doc)
    //     }
    // })

    product.save().then((result) => {
        console.log('Document saved:');
        res.status(201).json(product);
    })
        .catch((err) => {
            console.error('Error saving document:', err);
            res.status(500).send('Error saving document.');
        });
}

exports.getAllproducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

exports.getProduct = async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)
    res.json(product)
}

exports.replaceProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updateProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findOneAndDelete({ _id: id })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error)
    }
}