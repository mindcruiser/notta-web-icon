import React from 'react';

const NotesNumberedList = ({
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
      <path d="M7 6a1 1 0 00-1-1H3a1 1 0 000 2h2v5H3a1 1 0 100 2h6a1 1 0 100-2H7V6z"></path>
      <path d="M13 9a1 1 0 100 2h8a1 1 0 100-2h-8z"></path>
      <path d="M13 15a1 1 0 100 2h5a1 1 0 100-2h-5z"></path>
    </svg>
  );
};

export default NotesNumberedList;
