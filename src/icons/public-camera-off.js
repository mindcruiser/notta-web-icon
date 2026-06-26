import React from 'react';

const PublicCameraOff = ({
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
        d="M3.207 3.707a1 1 0 00-1.414 1.414l1.032 1.032A3 3 0 001 8.914v8a3 3 0 003 3h11c.463 0 .902-.105 1.294-.292l2.499 2.5a1 1 0 001.414-1.415l-17-17zm11.379 14.207l-10-10H4a1 1 0 00-1 1v8a1 1 0 001 1h10.586z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 14.5l3.901 3.901c1.292.862 3.099-.05 3.099-1.672V9.26c0-1.763-2.114-2.664-3.385-1.443L18 9.368v-.454a3 3 0 00-3-3H7.414l2 2H15a1 1 0 011 1V14.5zm2-.363l3 2.592V9.26l-3 2.88v1.996z"
      ></path>
    </svg>
  );
};

export default PublicCameraOff;
