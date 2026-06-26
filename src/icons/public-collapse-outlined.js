import React from 'react';

const PublicCollapseOutlined = ({
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
      <path d="M6.207 6.293a1 1 0 00-1.414 1.414l6.5 6.5a1 1 0 001.414 0l6.5-6.5a1 1 0 00-1.414-1.414L12 12.086 6.207 6.293z"></path>
      <path d="M5 17a1 1 0 100 2h14a1 1 0 100-2H5z"></path>
    </svg>
  );
};

export default PublicCollapseOutlined;
