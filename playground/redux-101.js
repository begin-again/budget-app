import { createStore } from 'redux';

const Actions = {};
Actions.increment = { type: 'INCREMENT' };
Actions.decrement = { type: 'DECREMENT' };
Actions.reset = { type: 'RESET' };

function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log('redux 101');

// action generators

const incrementCount = ({ by = 1 } = {}) => ({
  type: 'INCREMENT',
  by
});

const decrementCount = ({ by = 1 } = {}) => ({
  type: 'DECREMENT',
  by
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// reducers
// 1. pure functions
//    - output depends entirely on inputs
//    - inputs are not changed by function
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.by };
    case 'DECREMENT':
      return { count: state.count - action.by };
    case 'SET':
      return { count: action.count };
    // eslint-disable-next-line no-fallthrough
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// the passed in function called a reducer
const store = createStore(countReducer);
console.log('after store created', store.getState());

const unsub = store.subscribe(() => {
  return console.log(store.getState());
});

// Actions are objects sent to store

// increment the count
// types are uppcased by convention

// store.dispatch({ type: Actions.increment.type, incrementBy: 5 });
// store.dispatch(Actions.increment);

// unsub();

// store.dispatch(Actions.reset);
// store.dispatch({ type: Actions.decrement.type, decrementBy: 10 });

// store.dispatch({
//   type: 'SET',
//   count: 101
// });

store.dispatch(incrementCount());
store.dispatch(incrementCount({ by: 10 }));

store.dispatch(decrementCount());
store.dispatch(decrementCount({ by: 10 }));

store.dispatch(setCount({ count: 10 }));
// store.dispatch(set());

store.dispatch(resetCount());

// console.log(store.getState());
