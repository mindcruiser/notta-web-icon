import React from 'react';

const LoginEmail = ({ color = 'currentColor', size = '16', ...otherProps }) => {
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
        d="M6 3.5a4 4 0 00-4 4v9a4 4 0 004 4h12a4 4 0 004-4v-9a4 4 0 00-4-4H6zm-.324 2.026C5.782 5.51 5.89 5.5 6 5.5h12c.215 0 .422.034.616.097l-6.598 6.032-6.342-6.103zM4.123 6.807c-.08.216-.123.45-.123.693v9a2 2 0 002 2h12a2 2 0 002-2v-9a2.01 2.01 0 00-.044-.42l-6.589 6.025a2 2 0 01-2.736-.035L4.123 6.807z"
      ></path>
    </svg>
  );
};

export default LoginEmail;
