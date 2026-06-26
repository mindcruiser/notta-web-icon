import React from 'react';

const PublicNotification = ({
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
        d="M6.7 9.236C6.7 6.354 9.063 4 12 4s5.3 2.354 5.3 5.236v7.908H6.7V9.236zm12.6 0v7.908H21a1 1 0 110 2h-5.533a3.5 3.5 0 01-6.934 0H3a1 1 0 010-2h1.7V9.236C4.7 5.23 7.978 2 12 2s7.3 3.23 7.3 7.236zM12 20.164a1.5 1.5 0 01-1.415-1h2.83a1.5 1.5 0 01-1.415 1z"
      ></path>
    </svg>
  );
};

export default PublicNotification;
