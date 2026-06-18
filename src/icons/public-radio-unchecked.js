import React from 'react';

const PublicRadioUnchecked = ({
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
      <g clipPath="url(#clip0_608_12)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20z"></path>
      </g>
      <defs>
        <clipPath id="clip0_608_12">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PublicRadioUnchecked;
