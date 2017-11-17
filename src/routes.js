import React from 'react';
import { Router, Route, Switch} from 'react-router';
import Home from './containers/Home/';
import First from './containers/First';
export default ({dispatch, getState}) => {
    return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/first' component={First} />
    </Switch>
    ) 
}
