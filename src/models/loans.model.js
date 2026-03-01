let loans = [];
let currentId = 1;

export const getAll = () => loans;

export const getById = (id) =>
  loans.find(loan => loan.id === id);

export const create = (loanData) => {
  const newLoan = {
    id: currentId++,
    ...loanData
  };

  loans.push(newLoan);
  return newLoan;
};

export const replace = (id, newData) => {
  const index = loans.findIndex(l => l.id === id);

  if (index === -1) return null;

  loans[index] = { id, ...newData };

  return loans[index];
};

export const remove = (id) => {
  const index = loans.findIndex(l => l.id === id);

  if (index === -1) return false;

  loans.splice(index, 1);
  return true;
};