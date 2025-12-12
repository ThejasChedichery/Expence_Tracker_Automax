const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true,
        enum: ['food', 'transport', 'entertainment', 'utilities', 'other']
    },
    date: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String
    }
}, { timestamps: true })

const ExpenseData = mongoose.model('expense', ExpenseSchema)
module.exports = ExpenseData
