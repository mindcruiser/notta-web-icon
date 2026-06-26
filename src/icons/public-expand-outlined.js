import React from 'react';

const PublicExpandOutlined = ({
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
      <path d="M6.207 13.207a1 1 0 01-1.414-1.414l6.5-6.5a1 1 0 011.414 0l6.5 6.5a1 1 0 01-1.414 1.414L12 7.414l-5.793 5.793z"></path>
      <path d="M5 17a1 1 0 100 2h14a1 1 0 100-2H5z"></path>
    </svg>
  );
};

export default PublicExpandOutlined;
