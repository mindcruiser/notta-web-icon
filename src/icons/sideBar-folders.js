import React from 'react';

const SideBarFolders = ({
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
        d="M4 6.5a2 2 0 012-2h3.298a1 1 0 01.625.22l1.13.903a4 4 0 002.5.877H18a2 2 0 012 2V10H4V6.5zM4 12v5.5a2 2 0 002 2h12a2 2 0 002-2V12H4zm2-9.5a4 4 0 00-4 4v11a4 4 0 004 4h12a4 4 0 004-4v-9a4 4 0 00-4-4h-4.448a2 2 0 01-1.249-.438l-1.13-.905A3 3 0 009.297 2.5H6z"
      ></path>
    </svg>
  );
};

export default SideBarFolders;
