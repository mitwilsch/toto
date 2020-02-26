import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import SubjectIcon from '@material-ui/icons/Subject';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SaveIcon from '@material-ui/icons/Save';
import api from '../../utils/api';

const TotoForm = props => {
  const [user, setUser] = props.user;

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
    api.updateUser(newUser);
    setUser(newUser);
  };

  const addBody = () => {
    setAddBodyToggle(!addBodyToggle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        id="standard-basic"
        placeholder="Add title..."
      />
      <br />
      {addBodyToggle ? (
        <div>
          <TextField
            autoFocus
            multiline
            name="body"
            value={body}
            onChange={e => setBody(e.target.value)}
            id="standard-basic"
            placeholder="Add details..."
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
        <SaveIcon />
      </Button>
    </form>
  );
  // this is working with title only so far
};
export default TotoForm;
