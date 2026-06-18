import React from 'react';

const SideBarDevice = ({
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
        d="M7 2a4 4 0 00-4 4v12a4 4 0 004 4h10a4 4 0 004-4V6a4 4 0 00-4-4H7zM5 6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6zm3 2a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 4a1 1 0 100 2h2a1 1 0 100-2H9zm5 0a1 1 0 100 2h1a1 1 0 100-2h-1zm-5 4a1 1 0 100 2h1a1 1 0 100-2H9zm3 1a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

export default SideBarDevice;
