import React from 'react';

const PublicSend = ({ color = 'currentColor', size = '16', ...otherProps }) => {
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
        d="M21.996 2.912a1 1 0 00-1.334-.853L2.684 8.05a1 1 0 00-.131 1.843l7.702 3.851 3.85 7.702a1 1 0 001.844-.13l5.993-17.981c.049-.137.067-.281.054-.424zm-4.698 2.376L5.606 9.185l5.196 2.598 6.494-6.495zm-5.081 7.91l6.495-6.496-3.897 11.691-2.598-5.196z"
      ></path>
    </svg>
  );
};

export default PublicSend;
