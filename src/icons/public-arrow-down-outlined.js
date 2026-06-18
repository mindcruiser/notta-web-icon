import React from 'react';

const PublicArrowDownOutlined = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.892 8.337a.9.9 0 011.271.055L12 13.668l4.837-5.276a.9.9 0 111.326 1.216l-5.5 6a.9.9 0 01-1.326 0l-5.5-6a.9.9 0 01.055-1.271z"
      ></path>
    </svg>
  );
};

export default PublicArrowDownOutlined;
