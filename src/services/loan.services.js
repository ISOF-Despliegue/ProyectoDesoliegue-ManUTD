import * as loanModel from "../models/loans.model.js";
import * as bookModel from "../models/book.model.js";
import { AppError } from "../Utils/AppError.js";

export const getLoans = () => {
  return loanModel.getAll();
};

export const getLoanById = (id) => {
  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new AppError("Invalid loan id", 400);
  }

  const loan = loanModel.getById(numericId);

  if (!loan) {
    throw new AppError("Loan not found", 404);
  }

  return loan;
};

export const createLoan = (data) => {
  const { bookId, borrowerName, loanDate } = data;

  if (!bookId || !borrowerName || !loanDate) {
    throw new AppError("All fields are required", 400);
  }

  const numericBookId = Number(bookId);

  if (isNaN(numericBookId)) {
    throw new AppError("Invalid book id", 400);
  }

  const book = bookModel.getById(numericBookId);

  if (!book) {
    throw new AppError("Book not found", 404);
  }

  if (!book.available) {
    throw new AppError("Book is not available", 400);
  }

  // marcar libro como no disponible
  book.available = false;

  return loanModel.create({
    bookId: numericBookId,
    borrowerName,
    loanDate,
    returnDate: null,
    returned: false
  });
};

export const returnLoan = (id) => {
  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new AppError("Invalid loan id", 400);
  }

  const loan = loanModel.getById(numericId);

  if (!loan) {
    throw new AppError("Loan not found", 404);
  }

  if (loan.returned) {
    throw new AppError("Loan already returned", 400);
  }

  const book = bookModel.getById(loan.bookId);

  if (book) {
    book.available = true;
  }

  loan.returned = true;
  loan.returnDate = new Date().toISOString();

  return loan;
};

export const deleteLoan = (id) => {
  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new AppError("Invalid loan id", 400);
  }

  const deleted = loanModel.remove(numericId);

  if (!deleted) {
    throw new AppError("Loan not found", 404);
  }
};