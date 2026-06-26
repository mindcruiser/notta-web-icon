import React from 'react';

const PublicGenerate = ({
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
      <path d="M17.74 2.35a1 1 0 011.73.41l1 4.022a1 1 0 01-1.1 1.233l-4-.523a1 1 0 01-.63-1.643l.856-.997a8 8 0 104.293 8.483 1 1 0 111.973.33c-.064.379-.148.75-.253 1.113C20.405 18.947 16.56 22 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2c1.791 0 3.474.472 4.928 1.297l.813-.948z"></path>
    </svg>
  );
};

export default PublicGenerate;
