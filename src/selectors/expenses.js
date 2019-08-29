
import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense, i) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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
