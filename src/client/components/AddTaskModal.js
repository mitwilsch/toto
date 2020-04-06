import React, { useState } from 'react';
import {
  BottomNavigationAction,
  makeStyles,
  Drawer,
  Button,
  TextField,
} from '@material-ui/core';
import { Add, Subject, CalendarToday } from '@material-ui/icons';

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
  const [state, setState] = useState({ active: false, showBody: false });
  const [item, setItem] = useState({
    title: '',
    body: '',
  });

  const h = props.handler;

  const toggleDrawer = () => {
    setState({ ...state, active: !state.active });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = item;
    newItem.checked = false;
    const id = parseInt(h.tasks.slice(-1)[0].id) + 1;
    newItem.id = id.toString();
    h.setTasks([...h.tasks, newItem]);
    toggleDrawer();
    setItem({ title: '', body: '' });
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
            <Button
              color="primary"
              startIcon={<Subject />}
              onClick={() => setState({ ...state, showBody: true })}
            />
            <Button color="primary" startIcon={<CalendarToday />} />

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
