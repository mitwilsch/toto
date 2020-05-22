// write to local storage
import React from 'react';

const update = list => {
  localStorage.setItem('list', JSON.stringify(list));
};

const read = () => {
  const list = localStorage.getItem('list');
  console.log('list', list);
  if (list === undefined) {
    return [];
  }
  if (list === null) {
    return [];
  }

  return JSON.parse(list);
};

const deleteTask = () => {
  const tempTaskList = handler.tasks;
  tempTaskList.splice(index, 1);
  handler.setTasks(tempTaskList);
  handler.update(tempTaskList);
};

const addTask = item => {};

const fetchTasks = () => {
  const list = read();

  return list;
};

export { update, read, fetchTasks };
