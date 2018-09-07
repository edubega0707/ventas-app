import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './components/home/HomePage'
import LoginPage from './components/login/LoginPage';
class Routes extends React.Component{
    
    render(){
        let {logged} = this.props;
        return(
            <Switch>
               {/*  <Route exact path="/" component={LoginPage} />
                <Route path="/profile" component={HomePage} /> 
                <Route exact path="/home" component={HomePage} />*/} 
                <Route exact path="/" render={props =>(logged?<Redirect to="/profile" />: <LoginPage {...props}/>)}/>
                <Route path="/profile" render={(props)=>(logged?<HomePage {...props}/>:<Redirect to="/"/>)}/>
            </Switch>
        )
    }
}

export default Routes;