import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CompensationPage from './pages/CompensationPage';
import ApplicationPage from './pages/ApplicationPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/compensation">Compensation</Link></li>
            <li><Link to="/application">Application</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/compensation" component={CompensationPage} />
          <Route path="/application" component={ApplicationPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
