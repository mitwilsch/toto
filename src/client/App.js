import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Toto from './components/Toto';
import api from './utils/api';
import SplashPage from './components/SplashPage';

const App = props => {
  const { isAuthenticated, login, logout } = props.auth;
  const [user, setUser] = useState(null);
  const [totoList, setTotoList] = useState(null);
  const authBool = isAuthenticated();
  // Update user state and call to API with todo changes
  useEffect(() => {
    api.fetchUser(localStorage.getItem('id_token')).then(data => {
      if (!data.success) {
        console.log('Creating new user');
        api.newUser(localStorage.getItem('id_token')).then(data => {
          setUser(data.data);
        });
      }
      setUser(data.data[0]);
    });
  }, []);

  return user == null ? (
    <div>
      <Header auth={authBool} login={login} logout={logout} />
      <SplashPage />
    </div>
  ) : (
    <div>
      <Header auth={authBool} login={login} logout={logout} />
      <Toto user={[user, setUser]} />
    </div>
  );
};
export default App;
