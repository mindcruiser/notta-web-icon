import React from 'react';

const RecordsMarkFilled = ({
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
        d="M3 6a4 4 0 014-4h10a4 4 0 014 4v14c0 1.648-1.881 2.589-3.2 1.6l-5.2-3.9a1 1 0 00-1.2 0l-5.2 3.9c-1.318.989-3.2.048-3.2-1.6V6zm6 0a1 1 0 000 2h6a1 1 0 100-2H9z"
      ></path>
    </svg>
  );
};

export default RecordsMarkFilled;
