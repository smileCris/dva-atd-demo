import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Container from './routes/pages/Container/index';
import Child1 from './routes/pages/Child1/index';
import Child2 from './routes/pages/Child2/index';
import Child3 from './routes/pages/Child3/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Container} />
        <Route path="/child1" exact component={Child1} />
        <Route path="/child2" exact component={Child2} />
        <Route path="/child3" exact component={Child3} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
