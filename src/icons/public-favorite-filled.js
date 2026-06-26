import React from 'react';

const PublicFavoriteFilled = ({
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
      <path d="M12.895 2.055a1 1 0 00-1.794.005L8.277 7.825l-6.42.93a1 1 0 00-.556 1.706l4.652 4.548-1.11 6.318a1 1 0 001.455 1.055l5.701-3.04 5.703 3.04a1 1 0 001.456-1.054l-1.103-6.32L22.7 10.46a1 1 0 00-.556-1.704l-6.385-.931-2.864-5.77z"></path>
    </svg>
  );
};

export default PublicFavoriteFilled;
