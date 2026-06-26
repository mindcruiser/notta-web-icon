import React from 'react';

const NotesCommentSend = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm4.586-10.414a1 1 0 01-1.414 0L13 9.414V17a1 1 0 11-2 0V9.414l-2.172 2.172a1 1 0 01-1.414-1.414l3.879-3.88a.998.998 0 011.414 0l3.879 3.88a1 1 0 010 1.414z"
      ></path>
    </svg>
  );
};

export default NotesCommentSend;
