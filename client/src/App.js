import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, operationName } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// Import pages
import Landing from './pages/Landing';
import UserSettings from './pages/UserSettings';
import Home from './pages/Home';
import Communication from './pages/Communication';

import NotAPage from './pages/NotAPage';

import LoginMidwife from './components/LoginMidwife';
import SecondaryLoginForm from './components/SecondaryLoginForm';
import WorkerHome from './pages/WorkerHome';
import BirthworkerSignup from './pages/BirthworkerSignup';

// import worker pages
import WorkerSettings from './pages/WorkerSettings';

// making the connection to the graphql backend server
// "uri" = Uniform Resource Identifier
// this function also sets up looking at the user when logged in
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/settings" component={UserSettings} />
            <Route exact path="/home" component={Home}/>
            <Route exact path='/messages' component={Communication} />

            <Route exact path="/admin-login" component={LoginMidwife}/>
            <Route exact path="/admin/265317993996/signup" component={BirthworkerSignup}/>
            <Route exact path="/user-login" component={SecondaryLoginForm} />
            <Route exact path="/admin-home" component={WorkerHome}/>

            <Route exact path='/admin/settings' component={WorkerSettings} />
            <Route component={NotAPage}/>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
