import React from 'react';

const AppMemoAddDevice = ({
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
      <path d="M2.354 5.604a3.75 3.75 0 013.75-3.75h8a3.75 3.75 0 013.75 3.75v3.5a.75.75 0 01-1.5 0v-3.5a2.25 2.25 0 00-2.25-2.25h-8a2.25 2.25 0 00-2.25 2.25v12a2.25 2.25 0 002.25 2.25h3.5a.75.75 0 010 1.5h-3.5a3.75 3.75 0 01-3.75-3.75v-12z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.104 5.604a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1v-3a1 1 0 00-1-1h-6zm.5 1.5v2h5v-2h-5z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.646 16.604a5.542 5.542 0 11-11.084 0 5.542 5.542 0 0111.084 0zm-2.541 0a.438.438 0 00-.438-.438h-2.125v-2.125a.438.438 0 00-.875 0v2.125h-2.125a.438.438 0 000 .875h2.125v2.126a.437.437 0 10.875 0V17.04h2.125a.438.438 0 00.438-.437z"
      ></path>
    </svg>
  );
};

export default AppMemoAddDevice;
