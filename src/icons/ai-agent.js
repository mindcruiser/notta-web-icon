import React from 'react';

const AiAgent = ({ color = 'currentColor', size = '16', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M13.5 3.083c0 .445-.193.844-.5 1.119v1.881h5a3 3 0 013 3v10a3 3 0 01-3 3H6a3 3 0 01-3-3v-10a3 3 0 013-3h5V4.202a1.5 1.5 0 112.5-1.118zm-7.5 5a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-10a1 1 0 00-1-1H6zm-4 4a1 1 0 10-2 0v4a1 1 0 102 0v-4zm20 0a1 1 0 112 0v4a1 1 0 11-2 0v-4zm-13 3.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    </svg>
  );
};

export default AiAgent;
