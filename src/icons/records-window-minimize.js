import React from 'react';

const RecordsWindowMinimize = ({
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
      <rect x="5" y="10" width="14" height="4" rx="1"></rect>
    </svg>
  );
};

export default RecordsWindowMinimize;
