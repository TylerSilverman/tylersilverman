import React from 'react';

const Footer = props => {
  const year = new Date().getFullYear();

  return (
    <div>
      <p>&copy; {year} - Tyler Silverman</p>
    </div>
  );
};

export default Footer;
