// write to local storage
import React from 'react';

const update = list => {
  localStorage.setItem('list', JSON.stringify(list));
};

const read = () => {
  if (localStorage.getItem('list') == null) {
    const list = [];
    update(list);
  }
  const list = localStorage.getItem('list');
  return JSON.parse(list);
};

const add = item => {};
export { update, read };
