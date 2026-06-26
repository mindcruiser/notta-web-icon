import React from 'react';

const PublicAscending = ({
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
        d="M18 5a1 1 0 01-1 1H3a1 1 0 110-2h14a1 1 0 011 1zm-8 8a1 1 0 100-2H3a1 1 0 100 2h7zm-2 7a1 1 0 100-2H3a1 1 0 100 2h5zm9.003 1.5a.997.997 0 01-.738-.325l-.007-.008-4.498-4.998a1 1 0 011.486-1.338l2.757 3.063V9.5a1 1 0 012 0v8.394l2.757-3.063a1 1 0 111.486 1.338l-4.496 4.996a.998.998 0 01-.747.335z"
      ></path>
    </svg>
  );
};

export default PublicAscending;
