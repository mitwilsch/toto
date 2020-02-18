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
import SubjectIcon from '@material-ui/icons/Subject';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

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
  const setOverlay = props.overlay;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [checked, setChecked] = useState(false);

  const [addBodyToggle, setAddBodyToggle] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // this reloads the page, using this for now as state update is not re-rendering
    // e.stopPropagation();
    const item = { title, body, checked };
    const newUser = user;

    newUser.totos.push(item);
    utils.updateUser(newUser);
    setUser(newUser);
    setOverlay(false);
  };

  const addBody = () => {
    setAddBodyToggle(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        id="standard-basic"
        label={title}
      />
      <br />
      {addBodyToggle ? (
        <div>
          <TextField
            autoFocus
            name="body"
            value={body}
            onChange={e => setBody(e.target.value)}
            id="standard-basic"
            label={body}
          />
          <br />
        </div>
      ) : null}

      {/* conditional render */}

      <Button color="primary" startIcon={<SubjectIcon />} onClick={addBody}>
        Add Details
      </Button>

      <Button color="primary" startIcon={<CalendarTodayIcon />}>
        Add due date
      </Button>
      <Button color="primary" type="submit">
        Save
      </Button>
    </form>
  );
  // this is working with title only so far
};

const TotoFab = props => {
  const [overlay, setOverlay] = props.overlay;
  const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };
  const toggle = function() {
    setOverlay(!overlay);
  };
  // needs onClick
  return (
    <Fab color="secondary" style={style} onClick={toggle}>
      <AddIcon />
    </Fab>
  );
};

const Toto = props => {
  const [user, setUser] = props.user;
  const [overlay, setOverlay] = useState(false);

  /* const onSubmit = data => {
    setUser({ ...user, name: data.username });
    // if create user here, setUser needs time to finish otherwise updateUser sends old state
  }; */
  const deleteToto = index => {
    const { totos } = user;
    const newUser = user;
    newUser.totos.splice(index, 1);

    utils.updateUser(newUser);
    setUser(newUser);
  };

  if (overlay) {
    return <NewTotoForm user={[user, setUser]} overlay={setOverlay} />;
  }

  return (
    <React.Fragment>
      {user.totos[0] == undefined ? (
        <div>No todos!</div>
      ) : (
        <List>
          {user.totos.map((item, index) => (
            <ListItem key={item._id}>
              <Checkbox />
              <ListItemText primary={item.title} secondary={item.body} />

              <ListItemSecondaryAction>
                <Button onClick={() => deleteToto(index)}>Delete</Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}

      <TotoFab overlay={[overlay, setOverlay]} />
    </React.Fragment>
  );
  /* return <NewTotoForm user={[user, setUser]} />; */
};

export default Toto;
