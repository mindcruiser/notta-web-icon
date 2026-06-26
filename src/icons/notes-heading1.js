import React from 'react';

const NotesHeading1 = ({
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
      <path d="M10 11V5a1 1 0 112 0v15a1 1 0 11-2 0v-7H4v7a1 1 0 11-2 0V5a1 1 0 012 0v6h6z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.918 5.091A1 1 0 0120.5 6v14a1 1 0 11-2 0V8.174L16.65 9.76a1 1 0 01-1.3-1.518l3.5-3a1 1 0 011.068-.15z"
      ></path>
    </svg>
  );
};

export default NotesHeading1;
