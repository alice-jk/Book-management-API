const mongoose = require("mongoose");


const BookSchema = mongoose.Schema({
    title: String,
    isbn: Number,
    pageCount: Number,
    publishedDate: String,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    Bookstatus: String,
    authors:[String],
    categories:[String],
  
});


const books = mongoose.model("Books", BookSchema);

module.exports = books;