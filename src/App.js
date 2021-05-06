import React from 'react';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Login from './Components/login/Login';
import Dashboard from './Components/dashboard/Dashboard';
import ReadNow from'./Components/readNow/ReadNow';
import Register from './Components/register/Register'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component{
  render(){
  return (
    <div>

<Router>
<Header />
<Switch>
<Route exact path="/" component={Login} />
<Route exact path="/login" component={Login} />
<PrivateRoute path="/Dashboard" component={Dashboard} />
<PrivateRoute path="/readNow" component={ReadNow} />
<Route path="/register" component={Register} />


</Switch>
<Footer />
</Router>

    </div>
  )
  }

}
export default App;
