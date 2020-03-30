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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h3">My Tasks</Typography>
        <TaskItem item={taskList[0]} />

        <Typography variant="h4">Completed (1)</Typography>
        <TaskItem item={taskList[1]} />
      </Container>

      <footer className={classes.footer}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
          <BottomNavigationAction label="Add" icon={<AddIcon />} />
          <BottomNavigationAction label="More" icon={<MoreVertIcon />} />
        </BottomNavigation>
      </footer>
    </div>
  );
};

const TaskItem = props => {
  const { item } = props;

  const handleCheck = () => {};
  return (
    <Paper style={{ display: 'flex', width: '40%' }} variant="outlined">
      <Checkbox style={{ flex: 0 }} checked={item.checked} />
      <div style={{ flex: 1 }}>
        <Typography
          style={item.checked ? { textDecoration: 'line-through' } : {}}
          variant="body1"
        >
          {item.title}
        </Typography>
        <Typography
          style={item.checked ? { textDecoration: 'line-through' } : {}}
          variant="body2"
        >
          {item.body}
        </Typography>
      </div>
    </Paper>
  );
};
export default App;
