import React from 'react';

const NotesCheckboxCheckedFilled = ({
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
      <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm6.296 12.293a1 1 0 001.414 0l5.656-5.657a1 1 0 00-1.414-1.414l-4.949 4.95-2.122-2.122a1 1 0 10-1.414 1.414l2.829 2.829z"></path>
    </svg>
  );
};

export default NotesCheckboxCheckedFilled;
