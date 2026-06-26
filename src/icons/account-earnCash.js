import React from 'react';

const AccountEarnCash = ({
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
        d="M13 6a1 1 0 10-2 0v.537c-1.695.08-2.888 1.6-2.888 3.25s1.193 3.171 2.888 3.25v2.51H9.563a1 1 0 100 2H11V18a1 1 0 102 0v-.453c1.739-.034 2.97-1.576 2.97-3.253S14.74 11.074 13 11.04V8.534h1.52a1 1 0 100-2H13V6zm-2 2.547c-.435.08-.888.524-.888 1.24 0 .717.453 1.161.888 1.241v-2.48zm2 6.998c.458-.035.97-.49.97-1.251 0-.762-.512-1.216-.97-1.251v2.502z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z"
      ></path>
    </svg>
  );
};

export default AccountEarnCash;
