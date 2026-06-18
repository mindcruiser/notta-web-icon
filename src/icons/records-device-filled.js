import React from 'react';

const RecordsDeviceFilled = ({
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
        d="M6.5 2a3 3 0 00-3 3v14a3 3 0 003 3h11a3 3 0 003-3V5a3 3 0 00-3-3h-11zM7 7a1 1 0 011-1h8a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1V7zm0 10a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

export default RecordsDeviceFilled;
