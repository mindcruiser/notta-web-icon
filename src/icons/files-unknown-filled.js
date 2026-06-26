import React from 'react';

const FilesUnknownFilled = ({
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
      <path d="M14.628 6a3 3 0 003 3H21v10a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3h8.628v4zM7.909 16C7.407 16 7 16.448 7 17s.407 1 .91 1h8.18c.503 0 .91-.448.91-1s-.407-1-.91-1H7.91zm-.052-4C7.384 12 7 12.448 7 13s.384 1 .857 1h4.286c.473 0 .857-.448.857-1s-.384-1-.857-1H7.857zm8.102-9.48c0-.466.529-.697.831-.36l2.67 2.961 1.403 1.558c.296.328.08.872-.346.873-.832.002-1.812 0-2.518-.009-1.118 0-2.04-.983-2.04-2.177V2.52z"></path>
    </svg>
  );
};

export default FilesUnknownFilled;
