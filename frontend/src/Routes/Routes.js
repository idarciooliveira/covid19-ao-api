import React from 'react'
import {BrowserRouter ,Route} from 'react-router-dom'
import PageLandig from '../Screen/PageLanding'

function Routes(){
    return(
        <BrowserRouter>
        <Route component={PageLandig} exact />
        </BrowserRouter>
    )
}

export default Routes;