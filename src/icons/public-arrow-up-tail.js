import React from 'react';

const PublicArrowUpTail = ({
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
      <path d="M17.293 9.707a1 1 0 001.414-1.414l-6-6a.997.997 0 00-1.414 0l-6 6a1 1 0 001.414 1.414L11 5.414V21a1 1 0 102 0V5.414l4.293 4.293z"></path>
    </svg>
  );
};

export default PublicArrowUpTail;
