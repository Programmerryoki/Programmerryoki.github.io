import './about.css';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Page';
  }, []);

  return (
    <div>
      <p>TEST!</p>
    </div>
  );
};

export default AboutPage;
