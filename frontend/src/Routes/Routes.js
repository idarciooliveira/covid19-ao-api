import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import PageLandig from '../Screen/PageLanding'
import Provi from '../Screen/ProviPage'

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={PageLandig} />
        <Route path="/Provi" component={Provi} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;