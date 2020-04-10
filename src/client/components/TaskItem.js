import React, { useState } from 'react';

import { Checkbox, ListItem, ListItemText } from '@material-ui/core/';

const TaskItem = props => {
  const { item, index, handler } = props;
  console.log(item);
  const [checked, setChecked] = useState(item.checked);
  return (
    <ListItem>
      <Checkbox
        checked={checked}
        onClick={() => {
          const tempTaskList = handler.tasks;
          tempTaskList[index].checked = !tempTaskList[index].checked;
          handler.setTasks(tempTaskList);
          handler.update(tempTaskList);
          setChecked(!checked);
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
