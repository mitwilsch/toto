import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Typography,
  Container,
  List,
  ListItem,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { AppDrawer, AddTaskModal, TaskItem } from './components';
import { update, read } from './utils/api.js';

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

const App = props => {
  const classes = useStyles();
  const [taskList, setTaskList] = useState([]);
  const [state, setState] = useState({ completedActive: false });

  useEffect(() => {
    const list = read();
    // compare lists here before setting, and we can run on each render
    setTaskList(list);
  }, []);

  const toggleCompleted = () => {
    setState({ completedActive: !state.completedActive });
  };

  const tasksHandler = {
    tasks: taskList,
    setTasks: setTaskList,
    update,
    read,
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <List>
          <ListItem>
            <Typography variant="h3">My Tasks</Typography>
          </ListItem>

          {taskList.map((item, index) => (
            <TaskItem
              item={item}
              index={index}
              key={item.id}
              handler={tasksHandler}
            />
          ))}
        </List>
      </Container>
      <footer className={classes.footer}>
        <BottomNavigation showLabels>
          <AppDrawer />

          <AddTaskModal handler={tasksHandler} />
          <BottomNavigationAction label="More" icon={<MoreVert />} />
        </BottomNavigation>
      </footer>
    </div>
  );
};

export default App;

/* Todo
Populate App Drawer
Render popup on More click
Full-page item view
Add subtask to model
Item action moves to subtask of another item
x Hide completed menu behind clicker
More task lists
Menu actions create task list
Item action moves to another task list
*/
