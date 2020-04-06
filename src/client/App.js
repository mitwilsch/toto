import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { AppDrawer, AddTaskModal, TaskListModal } from './components';
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

const testTaskList = [
  {
    id: '1',
    title: 'Title of task',
    body: 'Body of task',
    checked: false,
  },
  {
    id: '2',
    title: 'Completed task title',
    body: 'Completed task body',
    checked: true,
  },
];

const App = props => {
  const classes = useStyles();
  const [taskList, setTaskList] = useState(testTaskList);
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
      <TaskListModal tasks={taskList} handler={tasksHandler} />
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
x Checkbox button controls item state
x New entry on Add click
x Render slider window on Menu click
Populate App Drawer
Render popup on More click
x Move tasks from My Tasks to Completed based on checked status
Full-page item view
Add date field to item structure
Add date picker to entry
Add subtask to model
Item action moves to subtask of another item
x Hide completed menu behind clicker
More task lists
Menu actions create task list
Item action moves to another task list
*/

/* Routes
Menu:
  Create new list
  Choose list
  Profile
Add item:
  x title
  x body 
  date
More: 
  Sorty by (date, user)
  Rename list
  Delete list
  Delete all completed
  Theme picker
Items:
  Move sorts order, assigns to subtask
  Swipe deletes
*/
