import React from 'react';

const PublicRestore = ({
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
      <path d="M12 2a9.972 9.972 0 00-7.071 2.929c-.252.252-.586.605-.929.976V4.5a1 1 0 00-2 0v4a.998.998 0 001 1h4a1 1 0 000-2H5.25c.41-.446.814-.878 1.093-1.157a8 8 0 110 11.314A1 1 0 104.93 19.07 9.972 9.972 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
    </svg>
  );
};

export default PublicRestore;
