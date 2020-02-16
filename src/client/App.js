import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Toto from './components/Toto';
import utils from './utils';

const App = props => {
  const { isAuthenticated, login, logout } = props.auth;
  const [user, setUser] = useState(null);
  const [totoList, setTotoList] = useState(null);
  const authBool = isAuthenticated();
  // Update user state and call to API with todo changes
  useEffect(() => {
    utils.fetchUser(localStorage.getItem('id_token')).then(data => {
      setUser(data);
    });
  }, []);

  return user == null ? (
    <div>
      <Header auth={authBool} login={login} logout={logout} />
      <p>No user</p>
    </div>
  ) : (
    <div>
      <Header auth={authBool} login={login} logout={logout} />
      <Toto user={[user, setUser]} />
    </div>
  );
};
export default App;
