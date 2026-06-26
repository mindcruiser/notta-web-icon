import React from 'react';

const FilesFilesDocOutlined = ({
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
      <path d="M15.172 2a3 3 0 012.121.879l2.828 2.828A3 3 0 0121 7.828V19a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3h9.172zM6 4a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V9h-1a3 3 0 01-3-3V4H6zm4 5v5l2-2 2 2V9h2v8h-2l-2-2-2 2H8V9h2zm7-3a1 1 0 001 1h.586L17 5.414V6z"></path>
    </svg>
  );
};

export default FilesFilesDocOutlined;
