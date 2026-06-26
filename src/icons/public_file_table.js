import React from 'react';

const PublicFileTable = ({
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
        d="M5 3a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V10h-4a3 3 0 01-3-3V3H5zm10 1.414L18.586 8H16a1 1 0 01-1-1V4.414zM2 4a3 3 0 013-3h8.172a3 3 0 012.12.879l5.83 5.828A3 3 0 0122 9.828V20a3 3 0 01-3 3H5a3 3 0 01-3-3V4zm6 7a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2H8zm0 2h2v1H8v-1zm0 3v1h2v-1H8zm4 0v1h4v-1h-4zm4-2v-1h-4v1h4z"
      ></path>
    </svg>
  );
};

export default PublicFileTable;
