import React from 'react';

const PublicAichatLayoutRight = ({
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
      <path d="M19 2a4 4 0 014 4v12a4 4 0 01-3.794 3.995L19 22H5l-.206-.005a4.001 4.001 0 01-3.79-3.789L1 18V6a4 4 0 014-4h14zM5 4a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2H5zm13 2a1 1 0 011 1v10a1 1 0 01-1 1h-4a1 1 0 01-1-1V7a1 1 0 011-1h4z"></path>
    </svg>
  );
};

export default PublicAichatLayoutRight;
