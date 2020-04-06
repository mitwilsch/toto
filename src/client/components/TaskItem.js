import React, { useState } from 'react';

import { Checkbox, ListItem, ListItemText } from '@material-ui/core/';

const TaskItem = props => {
  const { item, index } = props;
  const h = props.handler;
  const [checked, setChecked] = useState(item.checked);
  return (
    <ListItem>
      <Checkbox
        checked={checked}
        onClick={() => {
          const tempTaskList = h.tasks;
          tempTaskList[index].checked = !tempTaskList[index].checked;
          h.setTasks(tempTaskList);
          h.update(tempTaskList);
          setChecked(!checked);
        }}
      />
      <ListItemText primary={item.title} secondary={item.body} />
    </ListItem>
  );
};

export default TaskItem;
