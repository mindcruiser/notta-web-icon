import React from 'react';

const NotesCheckboxCheckedOutlined = ({
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
      <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm6.71 10.293a1 1 0 01-1.414 0l-2.829-2.829a1 1 0 011.414-1.414l2.122 2.122 4.95-4.95a1 1 0 011.414 1.414l-5.657 5.657z"></path>
    </svg>
  );
};

export default NotesCheckboxCheckedOutlined;
