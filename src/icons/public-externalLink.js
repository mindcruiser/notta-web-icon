import React from 'react';

const PublicExternalLink = ({
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
      <g clipPath="url(#clip0_3523_38)">
        <path d="M17.364 14.121a1 1 0 102 0V5.636a.997.997 0 00-1-1H9.879a1 1 0 100 2h6.07L4.93 17.656a1 1 0 101.414 1.415l11.021-11.02v6.07z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3523_38">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PublicExternalLink;
