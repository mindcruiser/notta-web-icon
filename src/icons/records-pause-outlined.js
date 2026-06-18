import React from 'react';

const RecordsPauseOutlined = ({
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
      <g clipPath="url(#clip0_1403_844)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.8 12c0 5.965-4.835 10.8-10.8 10.8-5.965 0-10.8-4.835-10.8-10.8C1.2 6.035 6.035 1.2 12 1.2c5.965 0 10.8 4.835 10.8 10.8zm1.2 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM13.636 9.545a.818.818 0 111.637 0v4.91a.818.818 0 01-1.637 0v-4.91zm-4.909 0a.818.818 0 011.637 0v4.91a.818.818 0 01-1.637 0v-4.91z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1403_844">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default RecordsPauseOutlined;
