import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import utils from '../utils';

const Toto = props => {
  const [user, setUser] = props.user;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    setUser({ ...user, name: data.username });
  };
  useEffect(() => {
    utils.updateUser(user);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>{user.name}</p>
      <input name="username" ref={register} />
      <input type="submit" />
    </form>
  );
};

export default Toto;
