import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from './commons';
import { Homepage, CartPage } from './pages';
import store from './store';

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
