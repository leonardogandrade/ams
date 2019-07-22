import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import Asset from './pages/Assets/Assets';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import AssetMap from './pages/AssetMap/AssetMap';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';

const PrivateRoute = ({component : Component, ...rest}) => (
    <Route 
    {...rest}
    render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/", state : {from : props.location}}} />
        )    
    }
    />
);

function Routes(){
    return(
        <Switch>           
            <Route path='/' exact component={Login}/>
            <PrivateRoute path="/asset" component={Asset}/>
            <PrivateRoute path='/signup' component={SignUp}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <PrivateRoute path="/assetmap" component={AssetMap}/>
            <PrivateRoute path='/reports' component={Reports}/>
        </Switch>
    )
};


export default Routes;


