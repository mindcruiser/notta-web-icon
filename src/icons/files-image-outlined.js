import React from 'react';

const FilesImageOutlined = ({
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
      <path d="M18 2a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h12zm-6.753 15.164a1 1 0 01-1.454.043l-1.82-1.821L4.2 18.867A1.998 1.998 0 006 20h12c.755 0 1.41-.419 1.751-1.036l-5.226-5.488-3.278 3.688zM6 4a2 2 0 00-2 2v10.331l3.321-3.065c.37-.342.931-.353 1.313-.04l.073.067 1.751 1.75 3.295-3.707a1 1 0 011.472-.026L20 16.325V6a2 2 0 00-2-2H6zm2.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
    </svg>
  );
};

export default FilesImageOutlined;
