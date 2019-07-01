import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Asset from './pages/Assets/Assets';
import Login from './pages/Login/Login';
import AssetMap from './pages/AssetMap/AssetMap';

function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/asset' component={Asset}/>
            <Route path='/assetmap' component={AssetMap}/>
        </Switch>
    )
}

export default Routes;