import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Checkbox,
} from '@material-ui/core';

const TotoItem = props => {
  const [handleCheckbox, handleDelete] = props.handlers;
  const { item, index } = props;
  return (
    <ListItem>
      <Checkbox checked={item.checked} onClick={() => handleCheckbox(index)} />
      <ListItemText
        primary={item.title}
        secondary={item.body}
        style={item.checked ? { textDecoration: 'line-through' } : {}}
      />

      <ListItemSecondaryAction>
        <Button onClick={() => handleDelete(index)}>Delete</Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default TotoItem;
