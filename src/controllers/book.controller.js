import * as bookService from "../services/book.services.js";

export const createBook = (req, res, next) => {
  try {
    const book = bookService.createBook(req.body);

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

export const getBooks = (req, res, next) => {
  try {
    const books = bookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

export const getBookById = (req, res, next) => {
  try {
    const book = bookService.getBookById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

export const deleteBook = (req, res, next) => {
  try {
    bookService.deleteBook(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const updateAvailability = (req, res, next) => {
  try {
    const { available } = req.body;

    const updatedBook = bookService.updateBookAvailability(
      req.params.id,
      available
    );

    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};

export const replaceBook = (req, res, next) => {
  try {
    const updatedBook = bookService.replaceBook(
      req.params.id,
      req.body
    );

    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};