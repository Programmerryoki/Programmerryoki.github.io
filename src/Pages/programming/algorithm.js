import './algorithm.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

// Also update programming.js
var pagesName = ['Djikstra', 'Binary Search'];
pagesName.sort();
var pages = { Djikstra: 'djikstra', 'Binary Search': 'binarysearch' };
var pageLink = () => {
  var pl = [];
  for (var pagename of pagesName) {
    pl.push(
      <NavLink
        className='subsubpage-link'
        activeClassName='is-active'
        to={'/programming/algorithm/' + pages[pagename]}
      >
        {pagename}
      </NavLink>
    );
  }
  return pl;
};

const AlgorithmPage = () => {
  return (
    <div className='algopage'>
      <div className='algopage_body'>
        <h1>Hello, this is a page for Algorithm stuff!</h1>
        <div className='algobody_selecting'>
          <p>Will be writing any algorithm that I newly learned!</p>
        </div>
        <div className='list_algorithm'>{pageLink()}</div>
      </div>
    </div>
  );
};

export default AlgorithmPage;
