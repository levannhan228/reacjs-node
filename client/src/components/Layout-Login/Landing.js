import React from 'react';
import {Switch,Route} from "react-router-dom";
import Login from './Login';
import Register from './Register';

const Landing = () => {
  return (
  <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="row w-100 m-0">
        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
          </Switch>
        </div>
      </div>
    </div>
  </div>  
  )
}

export default Landing
