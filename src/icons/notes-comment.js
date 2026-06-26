import React from 'react';

const NotesComment = ({
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
        d="M4 3a2 2 0 00-2 2v12a2 2 0 002 2h4.172l2.414 2.414a2 2 0 002.828 0L15.828 19H20a2 2 0 002-2V5a2 2 0 00-2-2H4zm8 17l-3-3H4V5h16v12h-5l-3 3zM7 9a1 1 0 001 1h8a1 1 0 100-2H8a1 1 0 00-1 1zm0 4a1 1 0 001 1h6a1 1 0 100-2H8a1 1 0 00-1 1z"
      ></path>
    </svg>
  );
};

export default NotesComment;
