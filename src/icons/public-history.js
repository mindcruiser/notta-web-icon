import React from 'react';

const PublicHistory = ({
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.186 0-9.45-3.947-9.95-9.001-.055-.55.398-.999.95-.999.552 0 .993.45 1.062.998A8.001 8.001 0 0020 12 8 8 0 005.385 7.5H7a1 1 0 110 2H3a1 1 0 01-1-1v-4a1 1 0 112 0V6a9.985 9.985 0 018-4zm0 5a1 1 0 011 1v3.17a1 1 0 00.293.708l2.243 2.243a1 1 0 11-1.415 1.414l-2.828-2.83A1 1 0 0111 12V8a1 1 0 011-1z"></path>
    </svg>
  );
};

export default PublicHistory;
