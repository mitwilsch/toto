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
  IconButton,
  Collapse,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SubjectIcon from '@material-ui/icons/Subject';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SaveIcon from '@material-ui/icons/Save';

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

  const [state, setState] = useState({ completedActive: false });

  const handleCheck = index => {
    const taskListTemp = taskList;
    taskListTemp[index].checked = !taskListTemp[index].checked;
    setTaskList(taskListTemp);
  };

  const toggleCompleted = () => {
    setState({ completedActive: !state.completedActive });
  };

  const TaskItem = props => {
    const { item, handler } = props;
    const [checked, setChecked] = useState(item.checked);
    return (
      <ListItem>
        <Checkbox
          style={{ flex: 0 }}
          checked={item.checked}
          onChange={() => {
            handler();
            setChecked(!checked);
          }}
        />
        <ListItemText primary={item.title} secondary={item.body} />
      </ListItem>
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

  const AddTaskModal = () => {
    const [state, setState] = useState({ active: false, showBody: false });
    const [item, setItem] = useState({
      title: '',
      body: '',
    });
    const toggleDrawer = () => {
      setState({ ...state, active: !state.active });
    };

    const handleSubmit = e => {
      e.preventDefault();
      const newItem = item;
      newItem.checked = false;
      const id = parseInt(taskList.slice(-1)[0].id) + 1;
      newItem.id = id.toString();
      setTaskList([...taskList, newItem]);
    };

    return (
      <React.Fragment>
        <BottomNavigationAction
          label="Add"
          icon={<AddIcon />}
          onClick={() => toggleDrawer()}
        />
        <Drawer
          anchor="bottom"
          open={state.active}
          onClose={() => toggleDrawer()}
        >
          <div style={{ paddingTop: '20px', paddingLeft: '10px' }}>
            <form onSubmit={handleSubmit}>
              <TextField
                autoFocus
                name="title"
                value={item.title}
                onChange={e => setItem({ ...item, title: e.target.value })}
                placeholder="New task"
              />
              {state.showBody ? (
                <TextField
                  autoFocus
                  multiline
                  name="body"
                  onChange={e => setItem({ ...item, body: e.target.value })}
                  placeholder="Add details"
                />
              ) : null}
              <Button
                color="primary"
                startIcon={<SubjectIcon />}
                onClick={() => setState({ ...state, showBody: true })}
              >
                Add details
              </Button>
              <Button color="primary" startIcon={<CalendarTodayIcon />}>
                Add date
              </Button>
              <Button color="primary" type="submit">
                <SaveIcon />
              </Button>
            </form>
          </div>
        </Drawer>
      </React.Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <List>
          <ListItem>
            <Typography variant="h3">My Tasks</Typography>
          </ListItem>
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

          <ListItem button onClick={() => toggleCompleted()}>
            <Typography variant="h4">
              Completed <ArrowDropDownIcon />
            </Typography>
          </ListItem>
          <Collapse in={state.completedActive} timeout="auto" unmountOnExit>
            <List>
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
            </List>
          </Collapse>
        </List>
      </Container>

      <footer className={classes.footer}>
        <BottomNavigation showLabels>
          <AppDrawer />
          <AddTaskModal />
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
