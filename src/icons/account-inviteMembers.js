import React from 'react';

const AccountInviteMembers = ({
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
        d="M6 6.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM10.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
      ></path>
      <path d="M19.5 7a1 1 0 011 1v1.5H22a1 1 0 110 2h-1.5V13a1 1 0 11-2 0v-1.5H17a1 1 0 110-2h1.5V8a1 1 0 011-1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 12a7 7 0 00-7 7v2a1 1 0 001 1h15a1 1 0 001-1v-2a7 7 0 00-7-7H9zm-5 7a5 5 0 015-5h3a5 5 0 015 5v1H4v-1z"
      ></path>
    </svg>
  );
};

export default AccountInviteMembers;
