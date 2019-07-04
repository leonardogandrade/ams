import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import { isAuthenticated } from './services/auth';

import Asset from './pages/Assets/Assets';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import AssetMap from './pages/AssetMap/AssetMap';

// const PrivateRoute = ({component : Component, ...rest}) => (
//     <Route 
//     {...rest}
//     render={props =>
//         isAuthenticated() ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to={{pathname: "/", state : {from : props.location}}} />
//         )    
//     }
//     />
// );

function Routes(){
    return(
        <Switch>           
            <Route path='/' exact component={Login}/>
            <Route path="/asset" component={Asset}/>
            <Route path='/signup' component={SignUp}/>
            <Route path="/assetmap" component={AssetMap}/>
        </Switch>
    )
};


export default Routes;


