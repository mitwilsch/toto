// write to local storage
import React from 'react';

const update = list => {
  localStorage.setItem('list', JSON.stringify(list));
};

const read = () => {
  const list = localStorage.getItem('list');
  return JSON.parse(list);
};
export { update, read };
