import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import utils from '../utils';

/* const usernameForm = (
  <form onSubmit={handleSubmit(onSubmit)}>
    <p>{user.name}</p>
    <input name="username" ref={register} />
    <input type="submit" />
  </form>
); */

const NewTotoForm = () => {
  return (

  )
}

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
    <Fab onClick={} color="secondary" style={style}>
      <AddIcon />
    </Fab>
  );
};

const Toto = props => {
  const [user, setUser] = props.user;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    setUser({ ...user, name: data.username });
    // if create user here, setUser needs time to finish otherwise updateUser sends old state
  };
  return <NewTotoForm />
};

export default Toto;
