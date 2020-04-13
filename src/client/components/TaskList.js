import React, { useState } from 'react';
import { TaskItem } from '.';

const TaskList = props => {
  const { tasks } = props;
  // the tasks.map feels hacky. Is there a better way to do this?
  return (
    <div>
      {tasks.map((item, index) => (
        <TaskItem item={item} index={index} key={item.id} />
      ))}
    </div>
  );
};

export default TaskList;
