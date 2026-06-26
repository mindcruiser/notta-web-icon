import React from 'react';

const PublicKeyboardEnter = ({
  color = 'currentColor',
  size = '16',
  ...otherProps
}) => {
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
        d="M19 12v-2a1 1 0 112 0v2a4 4 0 01-4 4H6.414l1.293 1.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 1.414L6.414 14H17a2 2 0 002-2z"
      ></path>
      <path d="M19 10a1 1 0 102 0 4 4 0 00-4-4h-3.586a1 1 0 100 2H17a2 2 0 012 2z"></path>
    </svg>
  );
};

export default PublicKeyboardEnter;
