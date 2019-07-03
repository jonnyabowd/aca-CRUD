import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListOfUsersContainer from './containers/ListOfUsersContainer';
import SignUpContainer from './containers/SignUpContainer';
import UserDetailContainer from './containers/UserDetailContainer';
import HomeContainer from './containers/HomeContainer';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomeContainer}></Route>
            <Route path='/list' component={ListOfUsersContainer}></Route>
            <Route path='/new' component={SignUpContainer}></Route>
            <Route path='/:id' component={UserDetailContainer}></Route>
        </Switch>
    );
}

export default Router