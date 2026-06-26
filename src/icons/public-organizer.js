import React from 'react';

const PublicOrganizer = ({
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1113.497 5.812A5 5 0 0013 15h-2a5 5 0 00-4.497 2.812A7.978 7.978 0 014 12zm4.163 7.022A7.964 7.964 0 0012 20c1.39 0 2.698-.355 3.837-.978A3.001 3.001 0 0013 17h-2a3.001 3.001 0 00-2.837 2.022zM12 8a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
      ></path>
    </svg>
  );
};

export default PublicOrganizer;
