import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Header.css';
//import {useHistory} from 'react-router-dom';

export default class Header extends Component {
  
 // history=useHistory();
  logout = () =>
  {
     localStorage.clear();
    // this.history.push('login')
  }
 
    render() {
        return (
            <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-4 mt-xl-4">
        
        <li className="nav-item">
        <Link to="/register" style={{ color: '#FFF' }}>    Registration    </Link>         
        </li>
        <li className="nav-item">
          <Link to="/login" style={{ color: '#FFF' }}>Login</Link>
        </li>

        <li className="nav-item">
        <Link to="/dashboard" style={{ color: '#FFF' }}>    Dashboard    </Link>
        </li>
        <li > <Link to="/ReadNow" style={{ color: '#FFF' }} id="ReadNowlink">    ReadNow    </Link></li>
        <li className="nav-item dropdown">
        
          
        </li>
        </ul>
      
<ul className="navbar-nav ml-auto mb-2 mb-lg-4 mt-xl-4">
  <li>Logged in as {localStorage.getItem("isAuthenticated")==="true"? "Admin": "Not Authorized"}</li>
<li ><button  onClick={this.logout}> {localStorage.getItem("isAuthenticated")==="true"? "Sign out":""} </button></li>
 
</ul>
    
  
    </div>
    </div>

</nav>
            </div>
        )
    }
}
