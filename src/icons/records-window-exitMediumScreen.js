import React from 'react';

const RecordsWindowExitMediumScreen = ({
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
        d="M2 6a3 3 0 013-3h14a3 3 0 013 3v5a1 1 0 11-2 0V6a1 1 0 00-1-1H5a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 110 2H5a3 3 0 01-3-3V6zm9 9a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2h-7a2 2 0 01-2-2v-4zm9 0h-7v4h7v-4zm-9.293-3.293a1 1 0 01-1.414 0l-1.5-1.5L6 12V7h5L9.207 8.793l1.5 1.5a1 1 0 010 1.414z"
      ></path>
    </svg>
  );
};

export default RecordsWindowExitMediumScreen;
