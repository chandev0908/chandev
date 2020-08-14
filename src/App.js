import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Styles

import './styles/app.scss'
// Components
import Home from './components/Home'
const App = () => {

    return(
        <>
            <Switch>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path=''>
                    <Home />
                </Route>
            </Switch>
        </>
    )

}
export default App