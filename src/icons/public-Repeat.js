import React from 'react';

const PublicRepeat = ({
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
        d="M16.293 2.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L17.586 7H7a2 2 0 00-2 2v3a1 1 0 11-2 0V9a4 4 0 014-4h10.586l-1.293-1.293a1 1 0 010-1.414zM19 15v-3a1 1 0 112 0v3a4 4 0 01-4 4H6.414l1.293 1.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 1.414L6.414 17H17a2 2 0 002-2z"
      ></path>
    </svg>
  );
};

export default PublicRepeat;
