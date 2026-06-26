import React from 'react';

const RecordsWindowFullScreen = ({
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
      <path d="M20 3a1 1 0 011 1v5a1 1 0 11-2 0V5h-4a1 1 0 110-2h5zM5 19h4a1 1 0 110 2H4a1 1 0 01-1-1v-5a1 1 0 112 0v4z"></path>
      <path d="M20 21a1 1 0 001-1v-5a1 1 0 10-2 0v4h-4a1 1 0 100 2h5zM5 5h4a1 1 0 000-2H4a1 1 0 00-1 1v5a1 1 0 002 0V5z"></path>
    </svg>
  );
};

export default RecordsWindowFullScreen;
