const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    createdAt: {type: Date, default: Date.now},
    password: String,
    mobile: String,
    firstName: String,
    lastName: String,
    dob: Date,
    avatar: {type: String, default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Ficon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199&psig=AOvVaw3-AkZA9B94lUbnf44jWVsD&ust=1646908963193000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDWxo_suPYCFQAAAAAdAAAAABAD'},
    passcode: Number, 
    subscribes: [
        {
            storeId: { type: mongoose.Schema.Types.ObjectId,ref: 'Store' },
        }
    ],
    level: {type: String, default: 'Newbie'},
    points:{type:Number, default: 0},
    isBusiness: {type: Boolean, default: false},
    isApproved: {type: Boolean, default: false},
    isLocked:  {type: Boolean, default: false},
});

module.exports = mongoose.model('User', userSchema);