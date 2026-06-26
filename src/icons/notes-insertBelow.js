import React from 'react';

const NotesInsertBelow = ({
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
        d="M4 4a1 1 0 000 2h16a1 1 0 100-2H4zm10 15a1 1 0 100 2h6a1 1 0 100-2h-6zm0-5a1 1 0 100 2h6a1 1 0 100-2h-6zM4 9a1 1 0 000 2h16a1 1 0 100-2H4zm.05 3.82a1 1 0 011 1v3h3.62l-.059-.059a1 1 0 111.414-1.414l1.768 1.768a1 1 0 010 1.414l-1.768 1.768a1 1 0 01-1.414-1.414l.063-.063H4.05a1 1 0 01-1-1v-4a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

export default NotesInsertBelow;
