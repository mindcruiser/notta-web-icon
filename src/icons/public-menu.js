import React from 'react';

const PublicMenu = ({ color = 'currentColor', size = '16', ...otherProps }) => {
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
        d="M21 4.9a.9.9 0 00-.9-.9H3.9a.9.9 0 100 1.8h16.2a.9.9 0 00.9-.9zm0 14a.9.9 0 00-.9-.9H3.9a.9.9 0 100 1.8h16.2a.9.9 0 00.9-.9zm-.9-7.9a.9.9 0 110 1.8H3.9a.9.9 0 110-1.8h16.2z"
      ></path>
    </svg>
  );
};

export default PublicMenu;
