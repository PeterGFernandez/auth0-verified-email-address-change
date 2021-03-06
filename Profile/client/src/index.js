/* Configure environment using '.env' file as described here:
    https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786 

   See also the following for using '.env' file  with React 
    https://create-react-app.dev/docs/adding-custom-environment-variables/
*/
import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Failure from './failure';
import { Auth0Provider } from "./react-auth0-spa";
import createAuth0Client from '@auth0/auth0-spa-js';
                                            // https://www.npmjs.com/package/@auth0/auth0-spa-js
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
var query=new URLSearchParams(window.location.search);

createAuth0Client({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  client_id: process.env.REACT_APP_AUTH0_CLIENTID,
  audience: process.env.REACT_APP_PROFILE_AUDIENCE,
  redirect_uri: (
    window.location.port)?
    window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + window.location.pathname:
    window.location.protocol + '//' + window.location.hostname + window.location.pathname
}).then(auth0Client => {
  var appState = {
    state: query.get("state")
  };

  /* Use React Router property passing as described here:
        https://tylermcginnis.com/react-router-pass-props-to-components/
  */
  ReactDOM.render(
    <Auth0Provider auth0ClientEx={auth0Client}>        
      <Router>
        <div>
          <Route exact path={`${process.env.PUBLIC_URL}/`} render={(props) => <App {...props} auth0Client={auth0Client} appState={appState} />}/>
        </div>
      </Router>
    </Auth0Provider>,
    document.getElementById('root'));
}).catch((error) => {
  console.error(error);
  ReactDOM.render(
    <Router>
      <div>
        <Route path="/" render={(props) => <Failure {...props} />}/>
      </div>
    </Router>,
    document.getElementById('root'));
});

registerServiceWorker();
