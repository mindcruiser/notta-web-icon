import React from 'react';

const AccountAutomations = ({
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
        d="M13.725 1.76a1 1 0 01.703.954v6.143h4a1 1 0 01.825 1.567l-7.858 11.428a1 1 0 01-1.824-.566v-6.143h-4a1 1 0 01-.824-1.567l7.857-11.428a1 1 0 011.121-.389zM7.472 13.142h3.1a1 1 0 011 1v3.923l4.955-7.209h-3.099a1 1 0 01-1-1V5.934l-4.956 7.209z"
      ></path>
    </svg>
  );
};

export default AccountAutomations;
