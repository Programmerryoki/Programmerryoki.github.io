import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Pages/homepage';
import CSSpage from './Pages/csspage';
import AboutPage from './Pages/about';
import NotFoundPage from './Pages/notfound';

ReactDOM.render(
  <div id='base'>
    <Router>
      <Header />
      <div id='navbar'>
        <Router>
          <Navbar />
          <div id='container'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route path='/csspage'>
                <CSSpage />
              </Route>
              <Route path='/about'>
                <AboutPage />
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
