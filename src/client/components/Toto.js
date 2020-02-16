import React, { useState } from 'react';

const Toto = props => {
  const [user, setUser] = props.user;
  console.log('user', user);
  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
};

export default Toto;
