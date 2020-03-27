import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Toto from './components/Toto';
import api from './utils/api';

const App = props => {
  const [user, setUser] = useState(null);
  const [totoList, setTotoList] = useState(null);

  localStorage.setItem('id_token', 'abc123');

  useEffect(() => {
    api.fetchUser(localStorage.getItem('id_token')).then(data => {
      setUser(data.data[0]);
    });
  }, []);

  return (
    <div>
      <CssBaseline />
      <Header />
      {/*    <Toto user={[user, setUser]} /> */}
      <div>Hello world</div>
    </div>
  );
};
export default App;
