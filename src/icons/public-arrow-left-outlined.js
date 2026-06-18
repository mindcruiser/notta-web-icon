import React from 'react';

const PublicArrowLeftOutlined = ({
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
        d="M15.663 18.108a.9.9 0 00-.055-1.272L10.332 12l5.276-4.837a.9.9 0 10-1.216-1.327l-6 5.5a.9.9 0 000 1.327l6 5.5a.9.9 0 001.271-.055z"
      ></path>
    </svg>
  );
};

export default PublicArrowLeftOutlined;
