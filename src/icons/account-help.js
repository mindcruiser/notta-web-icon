import React from 'react';

const AccountHelp = ({
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
        d="M6.5 8.5a5.5 5.5 0 116.5 5.41V16a1 1 0 11-2 0v-3a1 1 0 011-1 3.5 3.5 0 10-3.5-3.5 1 1 0 11-2 0zM12 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      ></path>
    </svg>
  );
};

export default AccountHelp;
