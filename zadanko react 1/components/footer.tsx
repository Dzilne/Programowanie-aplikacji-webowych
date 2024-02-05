import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright Krzysztof Dzilne {currentYear}</p>
    </footer>
  );
};

export default Footer;