import React from 'react';

const AccountDownload = ({
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
      <path d="M13 3a1 1 0 10-2 0v10.586l-2.793-2.793a1 1 0 00-1.414 1.414l4.5 4.5a.997.997 0 00.704.293h.006c.272 0 .518-.11.698-.286l.007-.008 4.5-4.499a1 1 0 00-1.415-1.414L13 13.586V3z"></path>
      <path d="M21 11a1 1 0 011 1v7a3 3 0 01-3 3H5a3 3 0 01-3-3v-6.996a1 1 0 112 0V19a1 1 0 001 1h14a1 1 0 001-1v-7a1 1 0 011-1z"></path>
    </svg>
  );
};

export default AccountDownload;
