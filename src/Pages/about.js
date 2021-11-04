import './about.css';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Page';
  }, []);

  return (
    <div>
      <h1>This is the page about Programmerryoki</h1>
    </div>
  );
};

export default AboutPage;
