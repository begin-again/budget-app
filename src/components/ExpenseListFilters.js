import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type='text' placeholder='filter by'
      value={props.filters.text}
      onChange={(event) => {
        props.dispatch(setTextFilter(event.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else {
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value='amount'>Amount</option>
      <option value='date'>Date</option>
    </select>
  </div>
);

const mapStateToProps = (state) => (
  {
    filters: state.filters
  }
);

export default connect(mapStateToProps)(ExpenseListFilters);
