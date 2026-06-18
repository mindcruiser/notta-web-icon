import React from 'react';

const AccountRewards = ({
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
        d="M9.207 1.793a1 1 0 00-1.414 1.414L9.586 5H4a2 2 0 00-2 2v2a2 2 0 002 2v8a3 3 0 003 3h10a3 3 0 003-3v-8a2 2 0 002-2V7a2 2 0 00-2-2h-5.586l1.793-1.793a1 1 0 00-1.414-1.414L12 4.586 9.207 1.793zM13 11h5v8a1 1 0 01-1 1h-4v-9zm-7 0h5v9H7a1 1 0 01-1-1v-8zm14-2H4V7h16v2z"
      ></path>
    </svg>
  );
};

export default AccountRewards;
