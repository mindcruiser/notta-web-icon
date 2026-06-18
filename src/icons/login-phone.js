import React from 'react';

const LoginPhone = ({ color = 'currentColor', size = '16', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M9 18a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5a3 3 0 013-3h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1h-1s0 1.5-1.5 1.5h-5C8 5.5 8 4 8 4H7z"
      ></path>
    </svg>
  );
};

export default LoginPhone;
