import React from 'react';

const RecordsStopDefault = ({
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
      <rect x="6" y="6" width="12" height="12" rx="2"></rect>
    </svg>
  );
};

export default RecordsStopDefault;
