import React from 'react';

const PublicMessage = ({
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
        d="M5 3a3 3 0 00-3 3v9.714a3 3 0 003 3h4.331l1.956 1.988a1 1 0 001.426 0l1.956-1.988H19a3 3 0 003-3V6a3 3 0 00-3-3H5zM4 6a1 1 0 011-1h14a1 1 0 011 1v9.714a1 1 0 01-1 1h-4.75a1 1 0 00-.713.299L12 18.574l-1.537-1.561a1 1 0 00-.713-.299H5a1 1 0 01-1-1V6zm12 4a1 1 0 100 2h1a1 1 0 100-2h-1zM6 11a1 1 0 011-1h1a1 1 0 110 2H7a1 1 0 01-1-1zm5.5-1a1 1 0 100 2h1a1 1 0 100-2h-1z"
      ></path>
    </svg>
  );
};

export default PublicMessage;
