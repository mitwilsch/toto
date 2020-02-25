import React, { useState, useEffect } from 'react';
import { List, TextField, Button, Typography } from '@material-ui/core';

import TotoFab from './TotoFab';
import api from '../utils/api';
import TotoForm from './TotoForm';
import TotoItem from './TotoItem';
import EditableUserName from './EditableUserName';
import TotoList from './TotoList';

/*
TotoList can list items 
TotoItem has styling
Checkbox, delete, and item title are props.children to totoItem
totoItems are nested in TotoList
*/
const Toto = props => {
  const [user, setUser] = props.user;

  return (
    <React.Fragment>
      <EditableUserName user={[user, setUser]} />
      <TotoFab>
        <TotoForm user={[user, setUser]} />
      </TotoFab>

      {user.totos[0] == undefined ? (
        <div>
          <Typography variant="h4">
            No todos! Click the Add button to make one!
          </Typography>
        </div>
      ) : (
        <div>
          <TotoList user={[user, setUser]} />
        </div>
      )}
    </React.Fragment>
  );
  /* return <NewTotoForm user={[user, setUser]} />; */
};

export default Toto;
