import React from 'react';

const AccountIntegrationApps = ({
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
      <rect x="2" y="2" width="9" height="9" rx="2.769"></rect>
      <rect x="2" y="13" width="9" height="9" rx="2.769"></rect>
      <rect x="13" y="2" width="9" height="9" rx="2.769"></rect>
      <path d="M17.5 13a1.5 1.5 0 011.5 1.5V16h1.5a1.5 1.5 0 010 3H19v1.5a1.5 1.5 0 01-3 0V19h-1.5a1.5 1.5 0 010-3H16v-1.5a1.5 1.5 0 011.5-1.5z"></path>
    </svg>
  );
};

export default AccountIntegrationApps;
