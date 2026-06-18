import React from 'react';

const PricingPlanFree = ({
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
        d="M9.207 1.793a1 1 0 00-1.414 1.414L9.586 5H3a1 1 0 00-1 1v4a1 1 0 001 1h1v8a3 3 0 003 3h10a3 3 0 003-3v-8h1a1 1 0 001-1V6a1 1 0 00-1-1h-6.586l1.793-1.793a1 1 0 00-1.414-1.414L12 4.586 9.207 1.793zM4 7h7v2H4V7zm9 2V7h7v2h-7zm0 2h5v8a1 1 0 01-1 1h-4v-9zm-7 0h5v9H7a1 1 0 01-1-1v-8z"
      ></path>
    </svg>
  );
};

export default PricingPlanFree;
