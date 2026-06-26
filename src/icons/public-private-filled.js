import React from 'react';

const PublicPrivateFilled = ({
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
      <path d="M12 2a5.5 5.5 0 015.5 5.5v1.531A4 4 0 0121 13v5a4 4 0 01-4 4H7a4 4 0 01-4-4v-5a4 4 0 013.5-3.969V7.5A5.5 5.5 0 0112 2zm0 11a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm0-9a3.5 3.5 0 00-3.5 3.5V9h7V7.5A3.5 3.5 0 0012 4z"></path>
    </svg>
  );
};

export default PublicPrivateFilled;
