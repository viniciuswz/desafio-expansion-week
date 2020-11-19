import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
    </Switch>
  );
};

export default Routes;
