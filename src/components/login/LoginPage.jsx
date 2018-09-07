import React, { Component } from 'react';
import {Paper} from '@material-ui/core'
import { LoginForm } from './LoginForm';

class LoginPage extends Component {

    state={
        user:{},
        newUser:{}
    }

    handleText=(e)=>{
        let {user} = this.state;
        let field = e.target.name;
        user[field] = e.target.value;
        this.setState({user})
    }
    render() {
        let {user, newUser} = this.state;
        let {logIn} = this.props;
        //let path = this.props.location.pathname;

        return (
            <div className="log-users-container">
              <div className="overlay">
                <Paper zDepth={2} style={{width:'30%'}}>
                    <LoginForm
                        {...user}
                        user={user}
                        handleText={this.handleText}
                        logIn={this.logInUser}/>
                </Paper>  
                </div>
            </div>
        );
    }
}

export default LoginPage;