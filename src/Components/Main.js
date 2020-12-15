import React from 'react';
import { Switch, Route } from 'react-router-dom';

import  Dashboard  from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Groups from './Pages/Groups';
import Tasks from './Pages/Tasks';

export const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/Dashboard' component={Dashboard}></Route>
        
        <Route exact path='/Projects' component={Projects}></Route>
        
        <Route exact path='/Groups' component={Groups}></Route>
        <Route exact path='/Tasks' component={Tasks}></Route>
        
    </Switch>
  );
}