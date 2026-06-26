import React from 'react';

const SideBarPrivateFolderOutlined = ({
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
        d="M8.4 12.737a1.5 1.5 0 011.2-1.47v-.447a2.4 2.4 0 114.8 0v.447a1.5 1.5 0 011.2 1.47v2.4a1.5 1.5 0 01-1.5 1.5H9.9a1.5 1.5 0 01-1.5-1.5v-2.4zm5-1.917v.417h-2.8v-.417a1.4 1.4 0 112.8 0zm-.944 2.433a.456.456 0 00-.912 0v1.367a.455.455 0 10.912 0v-1.367z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6.5a4 4 0 014-4h3.298a3 3 0 011.874.657l1.13.905a2 2 0 001.25.438h4.447a4 4 0 014 4v9a4 4 0 01-4 4H6a4 4 0 01-4-4v-11zm4-2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-4.448a4 4 0 01-2.5-.877l-1.13-.904a1 1 0 00-.624-.219H5.999z"
      ></path>
    </svg>
  );
};

export default SideBarPrivateFolderOutlined;
