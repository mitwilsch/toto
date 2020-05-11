import React, { useState } from 'react';
import { Checkbox, ListItem, ListItemText } from '@material-ui/core/';
import { handleCheckbox } from '../utils/handlers';

const TaskItem = props => {
  const { item, index } = props;
  // can we simplify this with a handler? Only pass item, or item ID to component
  /* I like passing item ID better
  that lets us do <TaskItem item=ID> in app
  here we can do 
    itemID = props.item
    item = (model)
  on update
    updateTask(itemID, item)
  Useeffect runs updateTask
  */

  return (
    <ListItem>
      <Checkbox checked={item.checked} onClick={() => handleCheckbox(index)} />
      <ListItemText primary={item.title} secondary={item.body} />

      <button
        type="button"
        onClick={() => {
          // put this into a handler later

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
