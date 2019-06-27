import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Asset from './pages/Assets/Assets';
import Login from './pages/Login/Login';

function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/asset' component={Asset}/>
        </Switch>
    )
}

export default Routes;