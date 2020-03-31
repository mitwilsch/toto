import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  Typography,
  Paper,
  Checkbox,
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Container,
} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

  const [taskList, setTaskList] = useState([
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
  ]);

  const handleCheck = index => {
    const taskListTemp = taskList;
    taskListTemp[index].checked = !taskListTemp[index].checked;
    setTaskList(taskListTemp);
  };

  const TaskItem = props => {
    const { item, handler } = props;
    const [checked, setChecked] = useState(item.checked);
    return (
      <Paper style={{ display: 'flex', width: '40%' }} variant="outlined">
        <Checkbox
          style={{ flex: 0 }}
          checked={item.checked}
          onChange={() => {
            handler();
            setChecked(!checked);
          }}
        />
        <div style={{ flex: 1 }}>
          <Typography variant="body1">{item.title}</Typography>
          <Typography variant="body2">{item.body}</Typography>
        </div>
      </Paper>
    );
  };

  const AppDrawer = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleDrawer = () => {
      setIsActive(!isActive);
    };

    const list = () => (
      <div className={classes.fullList} onClick={() => toggleDrawer()}>
        <List>
          <ListItem button>
            <ListItemText primary="Hello World" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <React.Fragment>
        <BottomNavigationAction
          label="Menu"
          icon={<MenuIcon />}
          onClick={() => toggleDrawer()}
        />
        <Drawer anchor="bottom" open={isActive} onClose={() => toggleDrawer()}>
          {list()}
        </Drawer>
      </React.Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h3">My Tasks</Typography>
        {taskList.map((item, index) => {
          if (!item.checked) {
            return (
              <TaskItem
                item={item}
                handler={() => handleCheck(index)}
                key={item.id}
              />
            );
          }
        })}

        <Typography variant="h4">Completed (1)</Typography>
        {taskList.map((item, index) => {
          if (item.checked) {
            return (
              <TaskItem
                item={item}
                handler={() => handleCheck(index)}
                key={item.id}
              />
            );
          }
        })}
      </Container>

      <footer className={classes.footer}>
        <BottomNavigation showLabels>
          <AppDrawer />

          <BottomNavigationAction label="Add" icon={<AddIcon />} />
          <BottomNavigationAction label="More" icon={<MoreVertIcon />} />
        </BottomNavigation>
      </footer>
    </div>
  );
};

export default App;

/* Todo
x Checkbox button controls item state
New entry on Add click
Render slider window on Menu click
Render popup on More click
x Move tasks from My Tasks to Completed based on checked status
Full-page item view
Add date field to item structure
Add date picker to entry
Add subtask to model
Item action moves to subtask of another item
Hide completed menu behind clicker
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
title
body 
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
