import * as authorModel from "../models/author.model.js";
import { AppError } from "../Utils/AppError.js";

export const getAuthors = () => {
  return authorModel.getAll();
};

export const getAuthorById = (id) => {
  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new AppError("Invalid author id", 400);
  }

  const author = authorModel.getById(numericId);

  if (!author) {
    throw new AppError("Author not found", 404);
  }

  return author;
};

export const createAuthor = (data) => {
  const { name, country, birthYear } = data;

  if (!name || !country || typeof birthYear !== "number") {
    throw new AppError("All fields are required and must be valid", 400);
  }

  return authorModel.create({ name, country, birthYear });
};

export const replaceAuthor = (id, data) => {
  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new AppError("Invalid author id", 400);
  }

  const { name, country, birthYear } = data;

  if (!name || !country || typeof birthYear !== "number") {
    throw new AppError("All fields are required and must be valid", 400);
  }

  const updated = authorModel.replace(numericId, {
    name,
    country,
    birthYear
  });

  if (!updated) {
    throw new AppError("Author not found", 404);
  }

  return updated;
};

export const deleteAuthor = (id) => {
  const numericId = Number(id);

  if (isNaN(numericId)) {
    throw new AppError("Invalid author id", 400);
  }

  const deleted = authorModel.remove(numericId);

  if (!deleted) {
    throw new AppError("Author not found", 404);
  }

  return;
};