import './homepage.css';
import { useEffect } from 'react';

const Homepage = () => {
  useEffect(() => {
    document.title = 'Homepage';
  }, []);

  return (
    <div className='homepage'>
      <div className='homepage_body'>
        <h1>Hello, this is a page for Programmerryoki</h1>
        <p>I will be updating this page soon!</p>
        <div className='gray_background'>
          <div className='header3 underline'>Editing History</div>
          <ol className='order-decimal' reversed='reversed'>
            <li>Added Euclidean Algorithm and the detail</li>
            <li>Added todo list + added resume in about page</li>
            <li>Added more detail to Binary Exponentiation</li>
            <li>Added Binary Exponentiation Page + Descriptions</li>
            <li>Edited About page + added pages associated to myself</li>
            <li>Added Binary Search Page (No Description)</li>
            <li>Added Djikstra Algorithm Page (No Description)</li>
            <li>Added Not Found Page</li>
            <li>Added Algorithm page + Routing to it</li>
            <li>Added Programming Page</li>
            <li>Added Css to most of them</li>
            <li>Added routing system to page</li>
            <li>Added Home, Css Page, About page</li>
            <li>Created this page</li>
          </ol>
        </div>
        <div className='gray_background'>
          <div className='header3 underline'>TODO List</div>
          <ol className='order-disc'>
            <div>
              <input type='checkbox' checked={false} />
              Change Resume to a page
            </div>
            <div>
              <input type='checkbox' checked={false} />
              Add detail to binary search and djikstra
            </div>
            <div>
              <input type='checkbox' checked={false} />
              Fix the problem of page not loading when reloaded
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
