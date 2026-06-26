import React from 'react';

const PublicDocumentation = ({
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
        d="M3 2.5a1 1 0 00-1 1v14.914a1 1 0 001 1h6.158c.746 0 1.225.1 1.495.262.17.101.347.27.347.824a1 1 0 102 0c0-.555.177-.723.347-.824.27-.163.75-.262 1.495-.262H21a1 1 0 001-1V3.5a1 1 0 00-1-1h-5.21c-1.572 0-2.927.79-3.79 1.988C11.137 3.29 9.782 2.5 8.21 2.5H3zm8 5.114C11 5.815 9.675 4.5 8.21 4.5H4v12.914h5.158c.59 0 1.242.047 1.842.241V7.615zm2 10.041c.6-.194 1.252-.24 1.842-.24H20V4.5h-4.21C14.325 4.5 13 5.815 13 7.614v10.041z"
      ></path>
    </svg>
  );
};

export default PublicDocumentation;
