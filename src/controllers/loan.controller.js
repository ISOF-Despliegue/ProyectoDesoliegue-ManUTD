import * as loanService from "../services/loan.services.js";

export const getLoans = (req, res, next) => {
  try {
    const loans = loanService.getLoans();
    res.status(200).json(loans);
  } catch (error) {
    next(error);
  }
};

export const getLoanById = (req, res, next) => {
  try {
    const loan = loanService.getLoanById(req.params.id);
    res.status(200).json(loan);
  } catch (error) {
    next(error);
  }
};

export const createLoan = (req, res, next) => {
  try {
    const newLoan = loanService.createLoan(req.body);
    res.status(201).json(newLoan);
  } catch (error) {
    next(error);
  }
};

export const returnLoan = (req, res, next) => {
  try {
    const loan = loanService.returnLoan(req.params.id);
    res.status(200).json(loan);
  } catch (error) {
    next(error);
  }
};

export const deleteLoan = (req, res, next) => {
  try {
    loanService.deleteLoan(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};