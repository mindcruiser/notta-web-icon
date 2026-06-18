import React from 'react';

const PublicAdd = ({ color = 'currentColor', size = '16', ...otherProps }) => {
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
        d="M13.03 5.001a1 1 0 10-2-.002L11.023 11H5a1 1 0 100 2h6.02l-.008 5.999a1 1 0 102 .002L13.02 13H19a1 1 0 100-2h-5.977l.007-5.999z"
      ></path>
    </svg>
  );
};

export default PublicAdd;
