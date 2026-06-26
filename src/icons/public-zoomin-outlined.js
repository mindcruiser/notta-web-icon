import React from 'react';

const PublicZoominOutlined = ({
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
        d="M10.498.992a9.5 9.5 0 000 19 9.46 9.46 0 005.973-2.112l3.676 3.675a1 1 0 101.414-1.414l-3.675-3.675a9.46 9.46 0 002.112-5.974 9.5 9.5 0 00-9.5-9.5zm-7.5 9.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM11.5 7.5a1 1 0 10-2 0v2.005l-1.995.003a1 1 0 10.002 2l1.993-.003V13.5a1 1 0 102 0v-1.997l2-.003a1 1 0 00-.003-2l-1.997.003V7.5z"
      ></path>
    </svg>
  );
};

export default PublicZoominOutlined;
