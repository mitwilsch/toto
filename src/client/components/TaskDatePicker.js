import React, { useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

// pick a date util library

import DateFnsUtils from '@date-io/date-fns';

const TotoDatePicker = props => {
  const [date, setDate] = props.state;

  console.log(date);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <React.Fragment>
        <DatePicker
          autoOk
          variant="static"
          openTo="date"
          value={date}
          onChange={tmpDate => setDate(tmpDate)}
        />
      </React.Fragment>
    </MuiPickersUtilsProvider>
  );
};
export default TotoDatePicker;
