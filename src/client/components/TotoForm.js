import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import SubjectIcon from '@material-ui/icons/Subject';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SaveIcon from '@material-ui/icons/Save';
import MomentUtils from '@date-io/moment';
import api from '../utils/api';
import { TotoFab } from './Toto';

const TotoForm = props => {
  const [user, setUser] = props.user;
  const { totos } = user;
  const [formActive, setFormActive] = props.formCtrl;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const [state, setState] = useState({ bodyActive: false, dateActive: false });
  // this could be done better

  const handleSubmit = e => {
    e.preventDefault();
    const checked = false;
    const item = { title, body, checked, dueDate };
    totos.push(item);
    setUser({ ...user, totos });
    api.updateUser(user);
    setFormActive(false);
  };

  const TitleField = (
    <TextField
      autoFocus
      name="title"
      value={title}
      onChange={e => setTitle(e.target.value)}
      placeholder="Add title..."
    />
  );

  const BodyField = (
    <TextField
      autoFocus
      multiline
      name="body"
      value={body}
      onChange={e => setBody(e.target.value)}
      placeholder="Add details..."
    />
  );

  const DateField = (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        label="Date"
        value={dueDate}
        onChange={setDueDate}
        animateYearScrolling
      />
    </MuiPickersUtilsProvider>
  );

  return (
    <form onSubmit={handleSubmit}>
      {TitleField}

      {state.bodyActive ? BodyField : null}

      {state.dateActive ? DateField : null}

      <Button
        color="primary"
        startIcon={<SubjectIcon />}
        onClick={() => setState({ ...state, bodyActive: true })}
      >
        Add Details
      </Button>

      <Button
        color="primary"
        startIcon={<CalendarTodayIcon />}
        onClick={() => setState({ ...state, dateActive: true })}
      >
        Add due date
      </Button>
      <Button color="primary" type="submit">
        <SaveIcon />
      </Button>
    </form>
  );
  // this is working with title only so far
};
export default TotoForm;
