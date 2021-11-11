import './about.css';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Page';
  }, []);

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
    </div>
  );
};

export default AboutPage;
