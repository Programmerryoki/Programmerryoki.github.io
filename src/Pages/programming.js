import './programming.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import CSSPage from './programming/csspage';
import AlgorithmPage from './programming/algorithm';
import Djikstra from './programming/algorithm/djikstra';
import Binarysearch from './programming/algorithm/binarysearch';
import BinaryExponentiation from './programming/algorithm/binaryexponentiation';
import EuclideanAlgorithm from './programming/algorithm/euclideanalgorithm';

var pagemenu = ['csspage'];
var pagesName = [
  'csspage',
  'algorithm/djikstra',
  'algorithm/binarysearch',
  'algorithm/binaryexponentiation',
  'algorithm/euclideanalgorithm',
];
var pages = [
  CSSPage,
  Djikstra,
  Binarysearch,
  BinaryExponentiation,
  EuclideanAlgorithm,
];
var pageLink = () => {
  var pl = [];
  for (var pagename of pagemenu) {
    pl.push(
      <NavLink
        className='subpage-link'
        activeClassName='is-active'
        to={'/programming/' + pagename}
      >
        {pagename}
      </NavLink>
    );
  }
  return pl;
};
var pageRoute = () => {
  var pl = [];
  for (var i in pages) {
    pl.push(<Route path={'/programming/' + pagesName[i]}>{pages[i]()}</Route>);
  }
  return pl;
};

const ProgrammingPage = () => {
  useEffect(() => {
    document.title = 'Programming Page';
  }, []);

  return (
    <div className='programming'>
      <div className='programming_body'>
        <NavLink
          className='subpage-link'
          activeClassName='is_active'
          to='/programming/algorithm'
        >
          Algorithm
        </NavLink>
        {pageLink()}
        <Switch>
          {pageRoute()}
          <Route path='/programming/algorithm'>
            <AlgorithmPage />
          </Route>
          <Route>
            <div>
              <h1>Hello, this is a page for Programming</h1>
              <p>I will be updating this page soon!</p>
              <p>Those are the list of programming related pages!</p>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ProgrammingPage;
