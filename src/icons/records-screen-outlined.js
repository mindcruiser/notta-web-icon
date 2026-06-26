import React from 'react';

const RecordsScreenOutlined = ({
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
        d="M5 6a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 002.986-2.705l1.26.788c1.199.75 2.754-.112 2.754-1.526V9.443c0-1.413-1.555-2.275-2.754-1.526l-1.26.788A3 3 0 0015 6H5zm13 5.054v1.892l2 1.25V9.804l-2 1.25zm-2-1.108V9a1 1 0 00-1-1H5a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1V9.946z"
      ></path>
    </svg>
  );
};

export default RecordsScreenOutlined;
