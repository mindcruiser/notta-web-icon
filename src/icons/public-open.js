import React from 'react';

const PublicOpen = ({ color = 'currentColor', size = '16', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_4537_145)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.851 8.643a4.52 4.52 0 00-.138 6.391l6.811 7.115a4.52 4.52 0 006.392.138l8.593-8.227a1 1 0 00-1.384-1.444l-8.592 8.227a2.52 2.52 0 01-3.564-.078l-6.812-7.114a2.52 2.52 0 01.078-3.564l8.592-8.227A1 1 0 0010.444.415L1.85 8.642zM13.5 3a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-2 0V5.514l-6.293 6.293a1 1 0 01-1.414-1.414L19.186 4H14.5a1 1 0 01-1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_4537_145">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PublicOpen;
