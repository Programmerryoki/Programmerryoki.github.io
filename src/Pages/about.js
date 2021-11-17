import './about.css';
import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import resumePDF from '../Images/Ryoki Kunii Resume Github.pdf';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Page';
  }, []);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  var onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <div>
        <h1>This is the page about Programmerryoki</h1>
      </div>
      <div>
        <h2>Here are the list of site!</h2>
        <h3>General</h3>
        <li>
          <a
            href='https://github.com/Programmerryoki'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/ryoki-kunii'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <h3>Competitive Programming</h3>
        <li>
          <a
            href='https://atcoder.jp/users/Programmerryoki'
            target='_blank'
            rel='noopener noreferrer'
          >
            Atcoder
          </a>
        </li>
        <li>
          <a
            href='https://codeforces.com/profile/Programmerryoki'
            target='_blank'
            rel='noopener noreferrer'
          >
            CodeForces
          </a>
        </li>
        <li>
          <a
            href='https://leetcode.com/Programmerryoki/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LeetCode
          </a>
        </li>
      </div>
      <br />
      <div className='CV'>
        <div className='header2'>Resume:</div>
        <embed src={resumePDF} width='800px' height='1000px' />
      </div>
    </div>
  );
};

export default AboutPage;
