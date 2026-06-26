import React from 'react';

const NotesUnderline = ({
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
      <path d="M7 3a1 1 0 011 1v8a4 4 0 108 0V4a1 1 0 112 0v8a6 6 0 11-12 0V4a1 1 0 011-1zM4 21a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"></path>
    </svg>
  );
};

export default NotesUnderline;
