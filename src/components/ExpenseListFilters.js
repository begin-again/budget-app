import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}) );
  };

  render () {
    return (
      <div>
        <input
          type='text' placeholder='filter by'
          value={this.props.filters.text}
          onChange={(event) => {
            this.props.dispatch(setTextFilter(event.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value='amount'>Amount</option>
          <option value='date'>Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          startDateId="MyDatePickerStart"
          endDateId="MyDatePickerEnd"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    filters: state.filters
  }
);

export default connect(mapStateToProps)(ExpenseListFilters);
