const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Book title is required']
        },
        author: {
            type: String,
            required: [true, 'Book author is required'],
            lowercase: true
        },
        description: {
            type: String,
            required: [true, 'Book description is required']
        },
        category: {
            type: String,
            enum: ['fiction', 'non-fiction', 'comics', 'programming', 'others'],
            default: 'fiction'
        },
        purchaseCount: {
            type: Number,
            required: [true, 'Field is required'],
            default: 0
        },
        imageUrl: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Book', BookSchema);
