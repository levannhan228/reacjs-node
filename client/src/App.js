import React, { Fragment } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Landing from './components/Layout-Login/Landing';
//redux
import {Provider} from 'react-redux';
import store from './store';

const App = () =>(
<Provider store={store}>
  <Router>
    <Fragment>
      <Landing/>
    </Fragment>
  </Router>
</Provider>
);

export default App;
