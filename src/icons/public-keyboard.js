import React from 'react';

const PublicKeyboard = ({
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
        d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3H5zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7zm1 3a1 1 0 011-1h1a1 1 0 010 2H6a1 1 0 01-1-1zm4.5 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM15 9a1 1 0 100 2h3a1 1 0 100-2h-3zM5 14.5a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

export default PublicKeyboard;
