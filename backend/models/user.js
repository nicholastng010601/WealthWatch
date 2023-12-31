const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

// Schema for user
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    transactions: [{
        type: mongoose.Types.ObjectId, 
        required: true, 
        ref: "Transaction"
    }],
    stocks: [{
        type: String,
        required: true
    }],
    monthlyBudget: {
        type: Number,
        default: 0
    }
});

userSchema.plugin(uniqueValidator);

const user = mongoose.model('User', userSchema);

module.exports = user