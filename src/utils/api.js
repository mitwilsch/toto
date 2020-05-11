// write to local storage
import React from 'react';

const update = list => {
  localStorage.setItem('list', JSON.stringify(list));
};

const read = () => {
  const list = localStorage.getItem('list');

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
  if (localStorage.list) {
    const { list } = localStorage;
    return JSON.parse(list);
  }
};

export { update, read, fetchTasks };
