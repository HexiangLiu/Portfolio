import React from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button>
      <FaAngleDoubleUp className="scroll" onClick={scrollToTop} />
    </button>
  );
};

export default ScrollButton;
