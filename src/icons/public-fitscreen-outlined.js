import React from 'react';

const PublicFitscreenOutlined = ({
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
        d="M22 3.111C22 2.497 21.503 2 20.889 2h-5.556a1.111 1.111 0 000 2.222h4.445v4.445a1.111 1.111 0 102.222 0V3.11zM8.667 19.778H4.222v-4.445a1.111 1.111 0 00-2.222 0v5.556C2 21.503 2.497 22 3.111 22h5.556a1.111 1.111 0 000-2.222zM22 20.888c0 .614-.497 1.112-1.111 1.112h-5.556a1.111 1.111 0 010-2.222h4.445v-4.445a1.111 1.111 0 112.222 0v5.556zM8.667 4.223H4.222v4.445a1.111 1.111 0 11-2.222 0V3.11C2 2.497 2.497 2 3.111 2h5.556a1.111 1.111 0 110 2.222zM9 7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2H9zm0 2h6v6H9V9z"
      ></path>
    </svg>
  );
};

export default PublicFitscreenOutlined;
