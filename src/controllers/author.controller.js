import * as authorService from "../services/author.services.js";

export const getAuthors = (req, res, next) => {
  try {
    const authors = authorService.getAuthors();
    res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};

export const getAuthorById = (req, res, next) => {
  try {
    const author = authorService.getAuthorById(req.params.id);
    res.status(200).json(author);
  } catch (error) {
    next(error);
  }
};

export const createAuthor = (req, res, next) => {
  try {
    const newAuthor = authorService.createAuthor(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

export const replaceAuthor = (req, res, next) => {
  try {
    const updated = authorService.replaceAuthor(
      req.params.id,
      req.body
    );
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteAuthor = (req, res, next) => {
  try {
    authorService.deleteAuthor(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};