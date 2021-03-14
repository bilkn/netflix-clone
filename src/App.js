import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { useAuthListener } from './hooks';
import { IsUserRedirect } from './helpers/routes';

export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signin />
      </IsUserRedirect>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/signin"></Route>
      <Route exact path="/browse">
        <Browse />
      </Route>
    </Router>
  );
}
