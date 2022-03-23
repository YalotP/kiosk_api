const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const isAuth = require('./isAuth');

const storeSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    associatedId: { type: mongoose.Schema.Types.ObjectId,ref: 'User' },
    storeName: String,
    storeDescription: String,
    isTakeaway: Boolean,
    isDelivery: Boolean,
    subscribes: [
        {
            associatedId: { type: mongoose.Schema.Types.ObjectId,ref: 'User' },
        }
    ],
    contactInfo: {
        email: String,
        mobile: String,
        phone: String,
        city: String,
        address: String,
        latitude: String,
        longtitude: String,
    },
    reviews:[
        {
            accountId:{ type: mongoose.Schema.Types.ObjectId,ref: 'User' },
            reviewContext: String,
            createdAt: {type: Date, default: Date.now},
            rank:Number,
            isPublished: Boolean
        }
    ],
    workingHours: [
        {
            day: Number, fromHour: String, toHour: String, isOpen: Boolean
        }
    ],
    
    logo: {type: String, default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Ficon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199&psig=AOvVaw3-AkZA9B94lUbnf44jWVsD&ust=1646908963193000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDWxo_suPYCFQAAAAAdAAAAABAD'},
    isBusiness: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    updateAt:  {type: Date, default: Date.now},
    isLocked:  {type: Boolean, default: false},
});

module.exports = mongoose.model('Store', userSchema);