import moment from 'moment';

export default [
  { id: '1', description: 'sweet gum', note: '', amount: 195, createdAt: 0 },
  { id: '2', description: 'candy', note: '', amount: 500, createdAt: moment(0).subtract(4, 'days').valueOf() },
  { id: '3', description: 'beer', note: 'stout', amount: 123400, createdAt: moment(0).add(4, 'days').valueOf() }
];
