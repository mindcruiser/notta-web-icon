import React from 'react';

const NotesCheckboxPartialCheckedFilled = ({
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
        d="M21 4a1 1 0 00-1-1H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4zm-4 8a1 1 0 00-1-1H8a1 1 0 100 2h8a1 1 0 001-1z"
      ></path>
    </svg>
  );
};

export default NotesCheckboxPartialCheckedFilled;
