import React, { useState } from 'react';
import {
  Typography,
  makeStyles,
  Container,
  Collapse,
  List,
  ListItem,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import { TaskItem } from '.';

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

const TaskListModal = props => {
  const { tasks } = props;
  const classes = useStyles();
  const h = props.handler;
  const [state, setState] = useState({
    completedActive: false,
    updated: false,
  });

  const toggleCompleted = () => {
    setState({ completedActive: !state.completedActive });
  };

  const Tasks = (list, display) => {
    const mainList = [];

    if (display == 'Main') {
      for (let i = 0; i < list.length; i++) {
        if (!list[i].checked) {
          mainList.push(list[i]);
        }
      }
    }

    if (display == 'Completed') {
      for (let i = 0; i < list.length; i++) {
        if (list[i].checked) {
          mainList.push(list[i]);
        }
      }
    }

    return (
      <React.Fragment>
        {mainList.map((item, index) => {
          return (
            <TaskItem item={item} index={index} key={item.id} handler={h} />
          );
        })}
      </React.Fragment>
    );
  };

  const CompletedTasks = () => {};

  return (
    <Container component="main" className={classes.main} maxWidth="sm">
      <List>
        <ListItem>
          <Typography variant="h3">My Tasks</Typography>
        </ListItem>
        {Tasks(h.tasks, 'Main')}

        <ListItem button onClick={() => toggleCompleted()}>
          <Typography variant="h4">
            Completed <ArrowDropDown />
          </Typography>
        </ListItem>
        <Collapse in={state.completedActive} timeout="auto" unmountOnExit>
          <List>{Tasks(h.tasks, 'Completed')}</List>
        </Collapse>
      </List>
    </Container>
  );
};
export default TaskListModal;
