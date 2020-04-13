import React, { useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItem,
  ListItemText,
  Drawer,
  makeStyles,
} from '@material-ui/core';
import { MoreVert, Menu } from '@material-ui/icons';
import { AddTaskModal } from '.';

const useStyles = makeStyles(theme => ({
  fullList: {
    width: 'auto',
  },
}));
// dumping AppDrawer and TaskModel to refactor later
/* 
I want to have ActionBar be a self-contained component
App drawers need lists, and styling. 
Updates need to be run by handlers or API


*/
const AppDrawer = () => {
  const classes = useStyles();

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
        icon={<Menu />}
        onClick={() => toggleDrawer()}
      />
      <Drawer anchor="bottom" open={isActive} onClose={() => toggleDrawer()}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

const ActionBar = props => {
  const tasksHandler = props.handler;
  return (
    <BottomNavigation showLabels>
      <AppDrawer />

      <AddTaskModal handler={tasksHandler} />
      <BottomNavigationAction label="More" icon={<MoreVert />} />
    </BottomNavigation>
  );
};

export default ActionBar;
