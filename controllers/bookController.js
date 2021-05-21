const Book = require('../models/BookModel');

exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json({
            status: 'success',
            message: 'New book created',
            data: {
                book
            }
        });
    } catch (err) {
        return res.status(500).json({ status: 'error', message: err });
    }
};

exports.getBooks = async (req, res) => {
    // Search query object
    let searchQuery = {};

    // Searchable parameters
    const { purchaseCount, author } = req.query;

    if (purchaseCount) searchQuery.purchaseCount = purchaseCount * 1;
    if (author) searchQuery.author = author;

    try {
        // Find All books in db
        const books = await Book.find(searchQuery);

        if (!books) return res.status(200).json({ status: 'success', message: 'No book found', data: books });

        return res.status(200).json({
            status: 'success',
            message: 'All books fetched',
            count: books.length,
            data: {
                books
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: 'error', message: err.message });
    }
};
