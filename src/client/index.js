import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';

import App from './App';
import Callback from './components/Callback';
import Auth from './utils/auth';
import history from './utils/history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const Routes = () => (
  <Router history={history} component={App}>
    <div>
      <Route
        path="/callback"
        render={props => {
          handleAuthentication(props);
          return <Callback {...props} />;
        }}
      />
      <Route exact path="/" render={props => <App auth={auth} {...props} />} />
    </div>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
