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

import api from './utils/api';

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
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h3">My Tasks</Typography>

        <Paper style={{ display: 'flex', width: '40%' }} variant="outlined">
          <Checkbox style={{ flex: 0 }} checked={false} />
          <div style={{ flex: 1 }}>
            <Typography variant="body1">Title of task</Typography>
            <Typography variant="body2">Body of task</Typography>
          </div>
        </Paper>

        <Typography variant="h4">Completed (1)</Typography>

        <Paper style={{ display: 'flex', width: '40%' }} variant="outlined">
          <Checkbox style={{ flex: 0 }} checked />
          <div style={{ flex: 1 }}>
            <Typography
              style={{ textDecoration: 'line-through' }}
              variant="body1"
            >
              Completed task title
            </Typography>
            <Typography variant="body2">Completed task body</Typography>
          </div>
        </Paper>
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
export default App;
