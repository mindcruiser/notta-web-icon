import React from 'react';

const SideBarFolderFilled = ({
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
        d="M5 2.5a4 4 0 00-4 4v11a4 4 0 004 4h14a4 4 0 004-4v-9a4 4 0 00-4-4h-5.477a2 2 0 01-1.168-.377l-1.47-1.058A3 3 0 009.134 2.5H5z"
      ></path>
    </svg>
  );
};

export default SideBarFolderFilled;
