const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    storeId: { type: mongoose.Schema.Types.ObjectId,ref: 'Store' },
    categoryId: { type: mongoose.Schema.Types.ObjectId,ref: 'Category' },
    categoryName: String,
    categoryImages: [
        {
            imageSource: String
        }
    ],
    price: Number,
    discount: {type:Number, default:0},
    unitInStock: Number, 
    desclimer: String,
    isAgeLimited: Boolean
});

module.exports = mongoose.model('Product', productSchema);