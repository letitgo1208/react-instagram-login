import React, { Component } from 'react';

class Success extends Component {
  
  getAuthCookie(name) {
    var pairs = document.cookie.split("; ");
    var count = pairs.length;
    
    while ( count-- ) {
        const parts = pairs[count].split("=");
        if ( parts[0] === name ) {
            var value = parts[1];
            value = unescape(value);   
            return value;
        }
    }
    return false;
  }
  
  
  render() {
    const auth = this.getAuthCookie('auth');
    
    return (
      <div>
        <br/><br/>
        <b>Success</b>
        <br/><br/>
        <pre>{auth}</pre>
      </div>
    );
  }
  
}

export default Success;