import React from 'react';

const PublicArrowRightTail = ({
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
      <path d="M14.293 6.707a1 1 0 011.414-1.414l6 6a.997.997 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L18.586 13H3a1 1 0 110-2h15.586l-4.293-4.293z"></path>
    </svg>
  );
};

export default PublicArrowRightTail;
