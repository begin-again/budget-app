
export default (expenses) => {
  return expenses.reduce((acc, cv) => acc + cv.amount, 0);
};
