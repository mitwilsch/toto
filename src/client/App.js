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
}));

const App = props => {
  const classes = useStyles();
  const [taskList, setTaskList] = useState([]);

  // dummy var, need this to re-render app on button clicks
  const [clicked, setClicked] = useState(0);

  const fetchTasks = () => {
    const list = read();
    setTaskList(list);
  };

  const list = read();
  useEffect(() => {
    console.log('running effect');
    fetchTasks();
  }, [clicked]);

  const tasksHandler = {
    tasks: taskList,
    setTasks: setTaskList,
    update,
    read,
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container
        component="main"
        className={classes.main}
        maxWidth="sm"
        onClick={() => setClicked(clicked + 1)}
      >
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
