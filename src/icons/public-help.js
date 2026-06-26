import React from 'react';

const PublicHelp = ({ color = 'currentColor', size = '16', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M13 21v1a1 1 0 11-2 0v-1H3a1 1 0 01-1-1V4a1 1 0 011-1h6a3.99 3.99 0 013 1.354A3.99 3.99 0 0115 3h6a1 1 0 011 1v16a1 1 0 01-1 1h-8zm7-2V5h-5a2 2 0 00-2 2v12h7zm-9 0V7a2 2 0 00-2-2H4v14h7z"></path>
    </svg>
  );
};

export default PublicHelp;
