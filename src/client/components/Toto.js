import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { ListItemSecondaryAction, Button } from '@material-ui/core';

import utils from '../utils';

/* const usernameForm = (
  <form onSubmit={handleSubmit(onSubmit)}>
    <p>{user.name}</p>
    <input name="username" ref={register} />
    <input type="submit" />
  </form>
); */

const NewTotoForm = props => {
  const [user, setUser] = props.user;

  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // this reloads the page, using this for now as state update is not re-rendering
    // e.stopPropagation();
    const item = { title };
    const newUser = user;
    const done = false;
    newUser.totos.push({ title, done });
    utils.updateUser(newUser);
    setUser(newUser);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        id="standard-basic"
        label={title}
      />
    </form>
  );
  // this is working with title only so far
};

const TotoFab = () => {
  const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

  // needs onClick
  return (
    <Fab color="secondary" style={style}>
      <AddIcon />
    </Fab>
  );
};

const Toto = props => {
  const [user, setUser] = props.user;
  /* const onSubmit = data => {
    setUser({ ...user, name: data.username });
    // if create user here, setUser needs time to finish otherwise updateUser sends old state
  }; */
  const deleteToto = index => {
    const { totos } = user;
    const newUser = user;
    newUser.totos.splice(index, 1);
    console.log(newUser.totos);

    utils.updateUser(newUser);
    setUser(newUser);
  };

  return (
    <React.Fragment>
      <List>
        {user.totos.map((item, index) => (
          <ListItem key={item._id}>
            <Checkbox />
            <ListItemText primary={item.title} />
            <ListItemSecondaryAction>
              <Button onClick={() => deleteToto(index)}>Delete</Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <NewTotoForm user={[user, setUser]} />
    </React.Fragment>
  );
  /* return <NewTotoForm user={[user, setUser]} />; */
};

export default Toto;
