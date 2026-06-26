import React from 'react';

const PublicTemplateOutlined = ({
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
        d="M7 15.71A7 7 0 1115.71 7H19a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-3.29zM4 9a5 5 0 019.584-2H10a3 3 0 00-3 3v3.584A5.002 5.002 0 014 9zm10.747 0c.108.019.221.02.335.001L15.09 9H19a1 1 0 011 1v9a1 1 0 01-1 1h-9a1 1 0 01-1-1v-9a1 1 0 011-1h4.747z"
      ></path>
    </svg>
  );
};

export default PublicTemplateOutlined;
