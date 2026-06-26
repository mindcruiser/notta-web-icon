import React from 'react';

const FilesFilesDocOutlinedFilled = ({
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
      <path d="M14.628 6a3 3 0 003 3H21v10a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3h8.628v4zM8 17h2l2-2 2 2h2V9h-2v5l-2-2-2 2V9H8v8zm7.959-14.48c0-.466.529-.697.831-.36l2.67 2.961 1.403 1.558c.296.328.08.872-.346.873-.832.002-1.812 0-2.518-.009-1.118 0-2.04-.983-2.04-2.177V2.52z"></path>
    </svg>
  );
};

export default FilesFilesDocOutlinedFilled;
