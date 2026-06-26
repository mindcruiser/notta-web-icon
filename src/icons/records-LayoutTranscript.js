import React from 'react';

const RecordsLayoutTranscript = ({
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
        d="M18 5h-8v14h8a2 2 0 002-2V7a2 2 0 00-2-2zM8 3v18h10a4 4 0 004-4V7a4 4 0 00-4-4H8z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5H6a2 2 0 00-2 2v10a2 2 0 002 2h2V5zM6 3a4 4 0 00-4 4v10a4 4 0 004 4h4V3H6z"
      ></path>
    </svg>
  );
};

export default RecordsLayoutTranscript;
