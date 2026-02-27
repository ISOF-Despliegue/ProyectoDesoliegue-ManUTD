import * as bookModel from "../models/book.model.js";
import { AppError } from "../Utils/AppError.js";

export const createBook = (data) => {
  if (!data.title) {
    throw new Error("Title is required");
  }

  const bookData = {
    title: data.title,
    genre: data.genre || "Unknown",
    publishedYear: data.publishedYear || null,
    available: true
  };

  return bookModel.create(bookData);


};

export const getAllBooks = () => {
  return bookModel.getAll();
};

export const getBookById = (id) => {
  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new AppError("Invalid book id", 400);
  }

  const book = bookModel.getById(numericId);

  if (!book) {
    throw new AppError("Book not found", 404);
  }

  return book;
};

export const deleteBook = (id) => {
  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new AppError("Invalid book id", 400);
  }

  const deletedBook = bookModel.remove(numericId);

  if (!deletedBook) {
    throw new AppError("Book not found", 404);
  }

  return deletedBook;
};

export const updateBookAvailability = (id, available) => {
  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new AppError("Invalid book id", 400);
  }

  if (typeof available !== "boolean") {
    throw new AppError("Availability must be true or false", 400);
  }

  const updatedBook = bookModel.updateAvailability(numericId, available);

  if (!updatedBook) {
    throw new AppError("Book not found", 404);
  }

  return updatedBook;
};

export const replaceBook = (id, bookData) => {
  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new AppError("Invalid book id", 400);
  }

  const { title, genre, publishedYear, available } = bookData;

 
  if (
    !title ||
    !genre ||
    typeof publishedYear !== "number" ||
    typeof available !== "boolean"
  ) {
    throw new AppError("All fields are required and must be valid", 400);
  }

  const updatedBook = bookModel.replaceBook(numericId, {
    title,
    genre,
    publishedYear,
    available
  });

  if (!updatedBook) {
    throw new AppError("Book not found", 404);
  }

  return updatedBook;
};