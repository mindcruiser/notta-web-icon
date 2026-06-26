import React from 'react';

const RecordsWindowExitFullScreen = ({
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
      <path d="M9 14a1 1 0 011 1v5a1 1 0 11-2 0v-4H4a1 1 0 110-2h5zm7-6h4a1 1 0 110 2h-5a1 1 0 01-1-1V4a1 1 0 112 0v4z"></path>
      <path d="M15 14a1 1 0 00-1 1v5a1 1 0 102 0v-4h4a1 1 0 100-2h-5zM8 8H4a1 1 0 000 2h5a1 1 0 001-1V4a1 1 0 00-2 0v4z"></path>
    </svg>
  );
};

export default RecordsWindowExitFullScreen;
