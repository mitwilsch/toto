import React, { useState, useEffect } from 'react';
import { List } from '@material-ui/core';
import TotoItem from './TotoItem';
import api from '../utils/api';

const TotoList = props => {
  const [user, setUser] = props.user;

  const handleDelete = index => {
    const newUser = user;
    newUser.totos.splice(index, 1);
    api.updateUser(newUser);
    setUser(newUser);
  };

  const handleCheckbox = index => {
    const newUser = user;
    newUser.totos[index].checked = !newUser.totos[index].checked;
    api.updateUser(newUser);
    setUser(newUser);
  };

  return (
    <List>
      {user.totos.map((item, index) => (
        <TotoItem
          item={item}
          index={index}
          handlers={[handleCheckbox, handleDelete]}
        />
      ))}
    </List>
  );
};
export default TotoList;
