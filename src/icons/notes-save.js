import React from 'react';

const NotesSave = ({ color = 'currentColor', size = '16', ...otherProps }) => {
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
        d="M6 22a4 4 0 01-4-4V6a4 4 0 014-4h9.42a4 4 0 012.952 1.3l2.58 2.822A4 4 0 0122 8.822V18a4 4 0 01-4 4H6zm1-2H6a2 2 0 01-2-2V6a2 2 0 012-2h9.42a2 2 0 011.476.65l2.58 2.822A2 2 0 0120 8.822V18a2 2 0 01-2 2h-1v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4zm2 0h6v-4H9v4z"
      ></path>
    </svg>
  );
};

export default NotesSave;
