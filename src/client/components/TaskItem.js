import React, { useState } from 'react';
import { Checkbox, ListItem, ListItemText } from '@material-ui/core/';
import { handleCheckbox } from '../utils/handlers';

const TaskItem = props => {
  const { item, index, handler } = props;

  return (
    <ListItem>
      <Checkbox
        checked={item.checked}
        onClick={() => {
          handleCheckbox(index);
          // setChecked(!checked);
        }}
      />

      <ListItemText primary={item.title} secondary={item.body} />

      <button
        type="button"
        onClick={() => {
          const tempTaskList = handler.tasks;
          tempTaskList.splice(index, 1);
          handler.setTasks(tempTaskList);
          handler.update(tempTaskList);
        }}
      >
        Trash
      </button>
    </ListItem>
  );
};

export default TaskItem;
