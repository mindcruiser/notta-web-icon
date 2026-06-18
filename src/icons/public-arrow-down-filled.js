import React from 'react';

const PublicArrowDownFilled = ({
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
      <path d="M12.707 15.293a1 1 0 01-1.414 0l-4.44-4.44A.5.5 0 017.208 10h9.586a.5.5 0 01.353.854l-4.439 4.439z"></path>
    </svg>
  );
};

export default PublicArrowDownFilled;
