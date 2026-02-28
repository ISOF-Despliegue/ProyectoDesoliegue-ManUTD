let authors = [
  {
    id: 1,
    name: "Gabriel García Márquez",
    country: "Colombia",
    birthYear: 1927
  }
];

let currentId = 2;

export const getAll = () => authors;

export const getById = (id) =>
  authors.find(author => author.id === id);

export const create = (authorData) => {
  const newAuthor = {
    id: currentId++,
    ...authorData
  };

  authors.push(newAuthor);
  return newAuthor;
};

export const replace = (id, newData) => {
  const index = authors.findIndex(a => a.id === id);

  if (index === -1) return null;

  authors[index] = { id, ...newData };

  return authors[index];
};

export const remove = (id) => {
  const index = authors.findIndex(a => a.id === id);

  if (index === -1) return false;

  authors.splice(index, 1);
  return true;
};