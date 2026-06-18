import React from 'react';

const PublicArrowRightOutlined = ({
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
        d="M8.337 18.108a.9.9 0 01.055-1.271L13.668 12 8.392 7.163a.9.9 0 011.216-1.327l6 5.5a.9.9 0 010 1.327l-6 5.5a.9.9 0 01-1.271-.055z"
      ></path>
    </svg>
  );
};

export default PublicArrowRightOutlined;
