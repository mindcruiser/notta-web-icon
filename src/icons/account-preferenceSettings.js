import React from 'react';

const AccountPreferenceSettings = ({
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
      <path d="M14 2a1 1 0 011 1v4a1 1 0 11-2 0V6H3a1 1 0 010-2h10V3a1 1 0 011-1z"></path>
      <path d="M17 5a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"></path>
      <path d="M2 12a1 1 0 011-1h4a1 1 0 110 2H3a1 1 0 01-1-1z"></path>
      <path d="M12 10a1 1 0 10-2 0v4a1 1 0 102 0v-1h10a1 1 0 100-2H12v-1z"></path>
      <path d="M18 18a1 1 0 100 2h3a1 1 0 100-2h-3z"></path>
      <path d="M14 16a1 1 0 011 1v4a1 1 0 11-2 0v-1H3a1 1 0 110-2h10v-1a1 1 0 011-1z"></path>
    </svg>
  );
};

export default AccountPreferenceSettings;
