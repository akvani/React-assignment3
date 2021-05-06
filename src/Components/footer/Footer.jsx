import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                       
                       <nav className="navbar fixed-bottom navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="www.gmail.com">Contact us </a>
    
<ul className="list-unstyled">
    <li>
        <a href="www.facebook.com" className="text-dark">Facebook</a>
    </li>
    <li>
        <a href="www.twitter.com" className="text-dark">Twitter</a>
    </li>
    <li>
        <a href="www.instagram.com" className="text-dark">Instagram</a>
    </li>

</ul>
  </div>
</nav>

            </div>
        )
    }
}
