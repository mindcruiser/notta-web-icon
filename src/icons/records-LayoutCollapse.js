import React from 'react';

const RecordsLayoutCollapse = ({
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
        d="M4 3a2 2 0 00-2 2v6a2 2 0 002 2 1 1 0 001-1V4a1 1 0 00-1-1zm4 2h10a2 2 0 012 2v10a2 2 0 01-2 2H8V5zM6 5a2 2 0 012-2h10a4 4 0 014 4v10a4 4 0 01-4 4H8a2 2 0 01-2-2V5z"
      ></path>
    </svg>
  );
};

export default RecordsLayoutCollapse;
