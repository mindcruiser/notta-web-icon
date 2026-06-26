import React from 'react';

const FilesImageFill = ({
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
      <path d="M21.441 20.738A2.993 2.993 0 0119 22H5a2.996 2.996 0 01-2.586-1.484l5.559-5.13 1.82 1.821a1 1 0 001.454-.043l3.278-3.688 6.916 7.262zM19 2a3 3 0 013 3v13.424l-6.775-7.114a1.002 1.002 0 00-1.472.026l-3.295 3.707-1.751-1.75-.073-.067a1.001 1.001 0 00-1.313.04L2 18.176V5a3 3 0 013-3h14zM8.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
    </svg>
  );
};

export default FilesImageFill;
