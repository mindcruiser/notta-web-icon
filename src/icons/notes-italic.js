import React from 'react';

const NotesItalic = ({
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
      <path d="M15 19a1 1 0 01-1 1H8a1 1 0 110-2h1.927l2.116-12H10a1 1 0 010-2h6a1 1 0 110 2h-1.927l-2.116 12H14a1 1 0 011 1z"></path>
    </svg>
  );
};

export default NotesItalic;
