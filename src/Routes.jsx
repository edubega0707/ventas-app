import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './components/home/HomePage'
import LoginPage from './components/login/LoginPage';
class Routes extends React.Component{
    
    render(){
        let {logged, logIn} = this.props;
        return(
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/home" component={HomePage} />
                {/* <Route exact path="/home" component={HomePage} /> */}
                {/* <Route exact path="/" render={props =>(logged?<Redirect to="/ordenes" />: <LogUserPage {...props} logIn={logIn} />)}/> */}
            </Switch>
        )
    }
}

export default Routes;