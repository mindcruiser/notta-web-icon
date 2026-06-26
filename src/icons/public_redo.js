import React from 'react';

const PublicRedo = ({ color = 'currentColor', size = '16', ...otherProps }) => {
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
        d="M14.345 3.043a1 1 0 000 1.414l2.793 2.793h-6.69a7 7 0 000 14h7.59a1 1 0 100-2h-7.59a5 5 0 010-10h6.69l-2.793 2.793a1 1 0 001.414 1.414l4.5-4.5a1 1 0 000-1.414l-4.5-4.5a1 1 0 00-1.414 0z"
      ></path>
    </svg>
  );
};

export default PublicRedo;
