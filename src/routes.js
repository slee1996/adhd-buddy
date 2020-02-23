import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Meds from './Components/Meds'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/profile' component={Profile} />
        <Route path='/meds' component={Meds} />
    </Switch>
)