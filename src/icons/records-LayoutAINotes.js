import React from 'react';

const RecordsLayoutAiNotes = ({
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
        d="M20 17V7a2 2 0 00-2-2v14a2 2 0 002-2zM18 3a2 2 0 00-2 2v14a2 2 0 002 2 4 4 0 004-4V7a4 4 0 00-4-4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 19V5a2 2 0 00-2 2v10a2 2 0 002 2zM6 3a4 4 0 00-4 4v10a4 4 0 004 4 2 2 0 002-2V5a2 2 0 00-2-2z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5H8v14h8V5zM6 3v18h12V3H6z"
      ></path>
    </svg>
  );
};

export default RecordsLayoutAiNotes;
