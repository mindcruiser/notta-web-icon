import React from 'react';

const PublicHash = ({ color = 'currentColor', size = '16', ...otherProps }) => {
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
        d="M9.994 3.11a1 1 0 00-1.988-.22L7.55 7H3a1 1 0 000 2h4.327l-.667 6H3a1 1 0 100 2h3.438l-.432 3.89a1 1 0 101.988.22L8.45 17h5.987l-.432 3.89a1 1 0 101.988.22L16.45 17H21a1 1 0 100-2h-4.327l.667-6H21a1 1 0 100-2h-3.438l.432-3.89a1 1 0 10-1.988-.22L15.55 7H9.562l.432-3.89zM14.66 15l.666-6H9.34l-.666 6h5.988z"
      ></path>
    </svg>
  );
};

export default PublicHash;
