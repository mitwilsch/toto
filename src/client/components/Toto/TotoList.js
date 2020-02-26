import React, { useState, useEffect } from 'react';
import { List } from '@material-ui/core';
import TotoItem from './TotoItem';
import api from '../../utils/api';

const TotoList = props => {
  const [user, setUser] = props.user;
  const { totos } = user;

  const handleDelete = index => {
    totos.splice(index, 1);
    setUser({ ...user, totos });
    api.updateUser(user);
  };

  const handleCheckbox = index => {
    totos[index].checked = !totos[index].checked;
    setUser({ ...user, totos });
    api.updateUser(user);
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
