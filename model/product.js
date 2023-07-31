const mongoose = require('mongoose');
const { Schema } = mongoose;


// schema
const productSchema = new Schema({
    title: { type: String, required: [true, "Please enter a product Title"], unique: true },
    description: { type: String, required: true },
    price: { type: Number, min: [0, "Wrong price"], required: true },
    discountPercentage: { type: Number, min: [0, "Wrong discount"], max: [50, "discount overflowed"], required: true },
    rating: { type: Number, min: [0, "Wrong rating"], max: [5, "rating overflowed"] },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [String],
})

// model
exports.Product = mongoose.model('Product', productSchema);
