import React from 'react';

const RecordsAddMark = ({
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
        d="M7 4a2 2 0 00-2 2v14l5.2-3.9a3 3 0 013.6 0L19 20v-8.5a1 1 0 112 0V20c0 1.648-1.881 2.589-3.2 1.6l-5.2-3.9a1 1 0 00-1.2 0l-5.2 3.9c-1.318.989-3.2.048-3.2-1.6V6a4 4 0 014-4h6a1 1 0 110 2H7zm7 2a1 1 0 011-1h2V3a1 1 0 112 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V7h-2a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

export default RecordsAddMark;
