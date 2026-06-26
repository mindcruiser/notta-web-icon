import React from 'react';

const NotesBulletedList = ({
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
      <path d="M6 14a4 4 0 110-8 4 4 0 010 8z"></path>
      <path d="M13 9a1 1 0 100 2h8a1 1 0 100-2h-8z"></path>
      <path d="M13 15a1 1 0 100 2h4a1 1 0 100-2h-4z"></path>
    </svg>
  );
};

export default NotesBulletedList;
