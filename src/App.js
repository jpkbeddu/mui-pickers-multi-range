import React, { Component } from 'react';
import './App.css';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import DateMultiPicker from './components/DateMultiPicker';
import DateRangePicker from './components/DateRangePicker';

class App extends Component {
  handleDateChange = e => {
    console.log('handleDateChange', e);
  };
  render() {
    const prevDate = new Date().setDate(-1);
    const selectedDates = [prevDate, new Date()];
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="App">
          <DateMultiPicker
            label="Multi Date Picker"
            value={selectedDates}
            onChange={this.handleDateChange}
            animateYearScrolling
          />

          <DateRangePicker
            label="Date Range Picker"
            value={selectedDates}
            onChange={this.handleDateChange}
            animateYearScrolling
          />
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

export default App;
