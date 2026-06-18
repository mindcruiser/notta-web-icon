import React from 'react';

const PublicBothArrowLeftOutlined = ({
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
        d="M11.508 16.836a.9.9 0 01-1.216 1.327l-6-5.5a.9.9 0 010-1.327l6-5.5a.9.9 0 011.216 1.327L6.232 12l5.276 4.836zm8.2 0a.9.9 0 11-1.216 1.327l-6-5.5a.9.9 0 010-1.327l6-5.5a.9.9 0 111.216 1.327L14.432 12l5.276 4.836z"
      ></path>
    </svg>
  );
};

export default PublicBothArrowLeftOutlined;
