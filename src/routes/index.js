import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../components/Main'

export default function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </Router>
    )
}