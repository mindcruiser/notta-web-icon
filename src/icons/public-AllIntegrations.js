import React from 'react';

const PublicAllIntegrations = ({
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
        d="M5.5 1.5a4 4 0 00-4 4v2a4 4 0 004 4h2a4 4 0 004-4v-2a4 4 0 00-4-4h-2zm0 2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2zm11-2a4 4 0 00-4 4v2a4 4 0 004 4h2a4 4 0 004-4v-2a4 4 0 00-4-4h-2zm0 2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2zm-4 13a4 4 0 014-4h2a4 4 0 014 4v2a4 4 0 01-4 4h-2a4 4 0 01-4-4v-2zm2 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zm-9-4a4 4 0 00-4 4v2a4 4 0 004 4h2a4 4 0 004-4v-2a4 4 0 00-4-4h-2zm0 2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"
      ></path>
    </svg>
  );
};

export default PublicAllIntegrations;
