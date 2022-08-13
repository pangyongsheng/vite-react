// App.tsx
import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import routes from './router'

const App = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Router>
        <Switch>
          {
            routes.map(route => <Route exact key={route.path} path={route.path}>
              <route.component />
            </Route>)
          }
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
