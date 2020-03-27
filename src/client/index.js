import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';

import App from './App';

import history from './utils/history';

const Routes = () => (
  <Router history={history} component={App}>
    <div>
      <Route exact path="/" render={props => <App {...props} />} />
    </div>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
