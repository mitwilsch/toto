import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import api from '../utils/api';

const EditableUserName = props => {
  const [user, setUser] = props.user;
  const [editing, setEditing] = useState(false);
  const [userName, setUserName] = useState(user.name);

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = user;
    newUser.name = userName;
    api.updateUser(newUser);
    setUser({ ...user, name: userName });
    setEditing(false);
  };

  const handleClick = () => {
    setEditing(true);
  };

  if (editing) {
    return (
      <div>
        <Typography variant="h3">
          Hello
          <form onSubmit={handleSubmit} style={{ display: 'inline' }}>
            <TextField
              autoFocus
              name="name"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              id="standard-basic"
              label={userName}
            />
          </form>
          <Button onClick={handleSubmit}>
            <SaveIcon />
          </Button>
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h3">
        Hello {user.name}!
        <Button onClick={handleClick}>
          <EditIcon />
        </Button>
      </Typography>
    </div>
  );
};
export default EditableUserName;
