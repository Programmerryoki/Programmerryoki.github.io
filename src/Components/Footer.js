import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div id='wrapper_foot'>
      <div className='footer'>
        <p>
          For more information, please look at{' '}
          <a href='https://github.com/Programmerryoki'>My Github</a> or{' '}
          <a href='https://www.linkedin.com/in/ryoki-kunii/'>My LinkedIn</a>.{' '}
          This site was last updated 11/03/2021
        </p>
      </div>
    </div>
  );
};

export default Footer;
