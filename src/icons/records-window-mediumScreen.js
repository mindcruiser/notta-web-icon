import React from 'react';

const RecordsWindowMediumScreen = ({
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
        d="M22 18a3 3 0 01-3 3H5a3 3 0 01-3-3v-5a1 1 0 112 0v5a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1h-4a1 1 0 110-2h4a3 3 0 013 3v12zm-9-9a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h7a2 2 0 012 2v4zM4 9h7V5H4v4zm9.293 3.293a1 1 0 011.414 0l1.5 1.5L18 12v5h-5l1.793-1.793-1.5-1.5a1 1 0 010-1.414z"
      ></path>
    </svg>
  );
};

export default RecordsWindowMediumScreen;
