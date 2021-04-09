import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectDetails from './projects/ProjectDetails';
import ProjectList from './projects/ProjectList';

const AppRouter = () => {
    return(
        <Switch>
            <Route exact path="/projects" component={ProjectList} />
            <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
    )
}

export default AppRouter;