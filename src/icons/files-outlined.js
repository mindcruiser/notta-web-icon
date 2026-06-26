import React from 'react';

const FilesOutlined = ({
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
      <path d="M15.172 2a3 3 0 012.121.879l2.828 2.828A3 3 0 0121 7.828V19a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3h9.172zM6 4a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V9h-1a3 3 0 01-3-3V4H6zm10.09 11c.503 0 .91.448.91 1s-.407 1-.91 1H7.91c-.503 0-.91-.448-.91-1s.407-1 .91-1h8.18zm-3.947-4c.473 0 .857.448.857 1s-.384 1-.857 1H7.857C7.384 13 7 12.552 7 12s.384-1 .857-1h4.286zM17 6a1 1 0 001 1h.586L17 5.414V6z"></path>
    </svg>
  );
};

export default FilesOutlined;
