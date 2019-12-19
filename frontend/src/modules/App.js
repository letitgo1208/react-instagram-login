import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  authenticateInstagram() {
    const authUrl = 'https://api.instagram.com/oauth/authorize/?client_id=2fbc4c88fae2461896a9ba191044532a&redirect_uri=http://165.227.58.221/code&response_type=code';
    window.location.href = authUrl;
  }
  
  render() {
    return (
      <div className="App">
        <br/><br/>
        <button onClick={this.authenticateInstagram} >Login With Instagram</button>
      </div>
    );
  }
  
}

export default App;
