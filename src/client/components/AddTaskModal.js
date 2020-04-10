import React, { useState } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
  BottomNavigationAction,
  makeStyles,
  Drawer,
  Button,
  TextField,
} from '@material-ui/core';
import { Add, Subject, CalendarToday } from '@material-ui/icons';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { TaskDatePicker } from '.';
import taskModel from '../models/task.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const AddTaskModal = props => {
  const classes = useStyles();
  const defaultState = { active: false, showBody: false, showDate: false };
  const [state, setState] = useState(defaultState);
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState(taskModel);
  const [lastItemId, setLastItemId] = useState(0);
  const h = props.handler;

  const toggleDrawer = () => {
    setState({ ...state, active: !state.active });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = item;
    // id
    if (h.tasks.length == 0) {
      setLastItemId(0);
    } else {
      setLastItemId(h.tasks.slice(-1)[0].id);
    }

    const id = parseInt(lastItemId) + 1;
    newItem.id = id.toString();
    // Date
    newItem.dueDate = date;
    // Submit
    h.setTasks([...h.tasks, newItem]);
    h.update([...h.tasks, newItem]);
    // Reset
    setState(defaultState);
    setItem(taskModel);
  };

  return (
    <React.Fragment>
      <BottomNavigationAction
        label="Add"
        icon={<Add />}
        onClick={() => toggleDrawer()}
      />
      <Drawer
        anchor="bottom"
        open={state.active}
        onClose={() => toggleDrawer()}
      >
        <div
          style={{
            paddingTop: '20px',
            paddingLeft: '10px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              name="title"
              value={item.title}
              onChange={e => setItem({ ...item, title: e.target.value })}
              placeholder="New task"
            />
            <br />
            {/* Show body conditional */}
            {state.showBody ? (
              <TextField
                autoFocus
                multiline
                name="body"
                onChange={e => setItem({ ...item, body: e.target.value })}
                placeholder="Add details"
              />
            ) : null}
            <br />
            {/* Add body button */}
            <Button
              color="primary"
              startIcon={<Subject />}
              onClick={() => setState({ ...state, showBody: true })}
            />
            {/* Date button */}
            <Button
              color="primary"
              startIcon={<CalendarToday />}
              onClick={() => setState({ ...state, showDate: true })}
            />
            {state.showDate ? <TaskDatePicker state={[date, setDate]} /> : null}

            {/* Save button */}
            <Button color="primary" type="submit">
              Save
            </Button>
          </form>
        </div>
      </Drawer>
    </React.Fragment>
  );
};
export default AddTaskModal;
