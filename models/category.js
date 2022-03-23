const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    storeId: { type: mongoose.Schema.Types.ObjectId,ref: 'Store' },
    categoryName: String,
    categoryImage: {type: String, default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Ficon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199&psig=AOvVaw3-AkZA9B94lUbnf44jWVsD&ust=1646908963193000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDWxo_suPYCFQAAAAAdAAAAABAD'},
    priority: Number 
});

module.exports = mongoose.model('Category', categorySchema);