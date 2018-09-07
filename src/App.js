import React, { Component } from 'react';
//import Routes from './Routes';
import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';
import'./App.css'
import Routes from './Routes';
class App extends Component {

  state={
    logged:true
  }

  render() {
    let {logged}=this.state
    return (
      <div>
        <Routes logged={logged} />
      </div>
    );
  }
}

export default App;