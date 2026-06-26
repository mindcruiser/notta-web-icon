import React from 'react';

const PublicDescending = ({
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
        d="M17.666 2.754a.998.998 0 00-1.413.082L11.757 7.83a1 1 0 001.486 1.338L16 6.106V14.5a1 1 0 102 0V6.106l2.757 3.063a1 1 0 001.486-1.338l-4.498-4.998-.008-.008a.991.991 0 00-.071-.071zM3 4a1 1 0 000 2h5a1 1 0 000-2H3zm0 7a1 1 0 100 2h7a1 1 0 100-2H3zm-1 8a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
};

export default PublicDescending;
