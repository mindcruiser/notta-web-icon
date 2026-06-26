import React from 'react';

const AccountSwapOutlined = ({
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
        d="M21 11a.997.997 0 00.705-.29l.004-.005A.997.997 0 0022 10l-.617.924.617-.927a.996.996 0 00-.293-.704l-6-6a1 1 0 10-1.414 1.414L18.586 9H3a1 1 0 100 2h18zM3 13a.997.997 0 00-.705.29l-.004.005A.997.997 0 002 14l.617-.924-.617.927a.997.997 0 00.293.704l6 6a1 1 0 001.414-1.414L5.414 15H21a1 1 0 100-2H3z"
      ></path>
    </svg>
  );
};

export default AccountSwapOutlined;
