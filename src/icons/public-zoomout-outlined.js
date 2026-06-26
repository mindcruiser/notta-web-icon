import React from 'react';

const PublicZoomoutOutlined = ({
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
        d="M.998 10.492a9.5 9.5 0 0119 0 9.46 9.46 0 01-2.112 5.973l3.675 3.676a1 1 0 01-1.414 1.414L16.47 17.88a9.46 9.46 0 01-5.973 2.112 9.5 9.5 0 01-9.5-9.5zm9.5-7.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM6.5 10.5a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

export default PublicZoomoutOutlined;
