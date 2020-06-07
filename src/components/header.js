import React, { Component } from 'react';
import Cookies from 'js-cookie';


class Head extends Component {
    logOut = ()=>{
        Cookies.remove('mr-token')
        //console.log(Cookies.get('mr-token'))
      
    }
    render(){
      return (<a href="/"  onClick={this.logOut} className="top-menu pull-right">Log Out <span className="glyphicon glyphicon-log-out"></span></a>);
    }
    
  }

  export default Head;