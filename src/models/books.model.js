let books = [];
let currentId = 1;

export const create = (data) =>{
    const newBook ={
        id: currentId++,
        ... data
    }

    books.push(newBook);
    return newBook;
}

export const getAll = () => books;

export const getById = (id) => {
  return books.find(book => book.id === id);
};

export const remove = (id) => {
  const index = books.findIndex(book => book.id === id);

  if (index === -1) return null;

  return books.splice(index, 1)[0];
};

export const updateAvailability = (id, available) => {
  const book = books.find(book => book.id === id);

  if (!book) return null;

  book.available = available;

  return book;
};

export const replaceBook = (id, newBookData) => {
  const index = books.findIndex(book => book.id === id);

  if (index === -1) return null;

  books[index] = {
    id,
    ...newBookData
  };

  return books[index];
};