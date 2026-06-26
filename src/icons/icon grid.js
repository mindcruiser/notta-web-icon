import React from 'react';

const IconGrid = ({ color = 'currentColor', size = '16', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_1291_632)">
        <rect x=".025" y=".025" width="23.95" height="23.95"></rect>
        <path d="M0 0l24 24"></path>
        <path d="M24 0L0 24"></path>
        <path d="M12 0v24"></path>
        <path d="M24 12H0"></path>
        <path d="M24 8H0"></path>
        <path d="M24 16H0"></path>
        <path d="M12 24V0"></path>
        <path d="M16 24V0"></path>
        <path d="M8 24V0"></path>
        <rect x="4.025" y="2.025" width="15.95" height="19.95" rx=".975"></rect>
        <rect
          x="21.975"
          y="4.025"
          width="15.95"
          height="19.95"
          rx=".975"
          transform="rotate(90 21.975 4.025)"
        ></rect>
        <rect x="3.025" y="3.025" width="17.95" height="17.95" rx=".975"></rect>
        <circle cx="12" cy="12" r="9.975"></circle>
        <circle cx="12" cy="12" r="4.975"></circle>
      </g>
      <defs>
        <clipPath id="clip0_1291_632">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconGrid;
