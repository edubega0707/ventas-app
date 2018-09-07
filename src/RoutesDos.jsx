import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import Ejemplo from './components/home/Ejemplo'
import EjemploDos from './components/home/EjemploDos'
export const RoutesDos=(props)=> {
    console.log(props)
    return(
        <div>
            <Route exact path={`${props.match.url}`} component={Ejemplo} />
            <Route path={`${props.match.url}/empresa`} component={EjemploDos} /> 
        </div>
    )

}