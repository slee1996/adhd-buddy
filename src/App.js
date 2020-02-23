import React from 'react';
import './styling/App.css';
import routes from './routes';
import {withRouter} from 'react-router-dom';
import Nav from './Components/Nav'
import Auth from './Components/Auth'

function App(props) {
  return (
    console.log(props),
    <div className="App">
      {props.location.pathname === '/'
      ? (<>
          {routes}
        </>)
      : (<>
          <Nav />
          {routes}
        </>)}
    </div>
  );
}

export default withRouter(App);
