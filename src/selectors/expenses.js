
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense, i) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      let textMatch = true;
      if (text) {
        const rx = new RegExp(text, 'i');
        textMatch = rx.test(expense.description);
      }

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') return b.createdAt - a.createdAt;
      return b.amount - a.amount;
    });
};
