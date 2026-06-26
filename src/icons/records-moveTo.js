import React from 'react';

const RecordsMoveTo = ({
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
        d="M12.293 11.293a1 1 0 011.414 0l3 3A1 1 0 0116 16H8a1 1 0 110-2h5.586l-1.293-1.293a1 1 0 010-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2.5a4 4 0 00-4 4v11a4 4 0 004 4h12a4 4 0 004-4v-9a4 4 0 00-4-4h-4.448a2 2 0 01-1.249-.438l-1.13-.905A3 3 0 009.297 2.5H6zm-2 4a2 2 0 012-2h3.298a1 1 0 01.625.22l1.13.903a4 4 0 002.5.877H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-11z"
      ></path>
    </svg>
  );
};

export default RecordsMoveTo;
