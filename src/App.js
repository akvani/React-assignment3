import React from 'react';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Login from './Components/login/Login';
import Dashboard from './Components/dashboard/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component{
  render(){
  return (
    <div>

<Router>
<Header />
<Switch>
<Route exact path="/" component={Login} />
<Route path="/Dashboard" component={Dashboard} />


</Switch>
<Footer />
</Router>

    </div>
  )
  }

}
export default App;
