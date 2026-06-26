import React from 'react';

const PublicUndo = ({ color = 'currentColor', size = '16', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.655 3.043a1 1 0 010 1.414L6.862 7.25h6.69a7 7 0 110 14h-7.59a1 1 0 110-2h7.59a5 5 0 000-10h-6.69l2.793 2.793a1 1 0 11-1.414 1.414l-4.5-4.5a1 1 0 010-1.414l4.5-4.5a1 1 0 011.414 0z"
      ></path>
    </svg>
  );
};

export default PublicUndo;
