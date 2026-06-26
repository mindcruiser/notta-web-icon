import React from 'react';

const SideBarPrivateFolderFilled = ({
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
      <path d="M13.4 10.82v.417h-2.8v-.417a1.4 1.4 0 112.8 0z"></path>
      <path d="M12.456 13.253a.456.456 0 00-.912 0v1.367a.455.455 0 10.912 0v-1.367z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6.5a4 4 0 014-4h4.133a3 3 0 011.753.565l1.469 1.058a2 2 0 001.168.377H19a4 4 0 014 4v9a4 4 0 01-4 4H5a4 4 0 01-4-4v-11zm7.4 6.237a1.5 1.5 0 011.2-1.47v-.447a2.4 2.4 0 114.8 0v.447a1.5 1.5 0 011.2 1.47v2.4a1.5 1.5 0 01-1.5 1.5H9.9a1.5 1.5 0 01-1.5-1.5v-2.4z"
      ></path>
    </svg>
  );
};

export default SideBarPrivateFolderFilled;
