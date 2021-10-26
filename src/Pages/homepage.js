import './homepage.css';
import { useEffect } from 'react';

const emptyLines = () => {
  var row = [];
  for (var i = 0; i < 100; i++) {
    row.push(<p>.</p>);
  }
  return row;
};

const Homepage = () => {
  useEffect(() => {
    document.title = 'Homepage';
  }, []);

  return (
    <div className='homepage'>
      <div className='homepage_body'>
        <h1>Hello, this is a page for Programmerryoki</h1>
        <p>I will be updating this page soon!</p>
        {emptyLines()}
      </div>
    </div>
  );
};

export default Homepage;
