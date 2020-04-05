import React, { useState } from 'react';
import {
  Typography,
  makeStyles,
  Container,
  Collapse,
  List,
  ListItem,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TaskItem from './TaskItem';

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

  return (
    <Container component="main" className={classes.main} maxWidth="sm">
      <List>
        <ListItem>
          <Typography variant="h3">My Tasks</Typography>
        </ListItem>
        {h.tasks.map((item, index) => {
          if (!item.checked) {
            return (
              <TaskItem item={item} index={index} key={item.id} handler={h} />
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
            {h.tasks.map((item, index) => {
              if (item.checked) {
                return (
                  <TaskItem
                    item={item}
                    index={index}
                    key={item.id}
                    handler={h}
                  />
                );
              }
            })}
          </List>
        </Collapse>
      </List>
    </Container>
  );
};
export default TaskListModal;
