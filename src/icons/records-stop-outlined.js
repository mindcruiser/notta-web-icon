import React from 'react';

const RecordsStopOutlined = ({
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
      <g clipPath="url(#clip0_315_16)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22.8c5.965 0 10.8-4.835 10.8-10.8 0-5.965-4.835-10.8-10.8-10.8C6.035 1.2 1.2 6.035 1.2 12c0 5.965 4.835 10.8 10.8 10.8zm0 1.2c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        ></path>
        <rect x="8.727" y="8.727" width="6.545" height="6.545" rx=".682"></rect>
      </g>
      <defs>
        <clipPath id="clip0_315_16">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default RecordsStopOutlined;
