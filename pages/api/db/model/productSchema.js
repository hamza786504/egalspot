const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    attributes: {
        type: {
            colors: {
                type: [String],
                default: []
            },
            sizes: {
                type: [String],
                default: []
            }
        },
        default: { colors: [], sizes: [] }
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String], // Assuming storing image URLs as strings
        default: []
    }
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;
