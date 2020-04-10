// write to local storage
import React from 'react';
import { read, update } from './api';

const handleCheckbox = index => {
  const list = read();
  list[index].checked = !list[index].checked;
  update(list);
};

export { handleCheckbox };
