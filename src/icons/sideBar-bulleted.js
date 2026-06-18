import React from 'react';

const SideBarBulleted = ({
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
      <g clipPath="url(#clip0_62_66)">
        <circle cx="12" cy="12" r="3"></circle>
      </g>
      <defs>
        <clipPath id="clip0_62_66">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default SideBarBulleted;
