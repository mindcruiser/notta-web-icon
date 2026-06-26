import React from 'react';

const NotesDecreaseIndent = ({
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
      <path d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 15a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm8-5a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zm0-5a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zm-7.57 2.876a.5.5 0 010-.752l2.74-2.398a.5.5 0 01.83.376v4.796a.5.5 0 01-.83.376l-2.74-2.398z"></path>
    </svg>
  );
};

export default NotesDecreaseIndent;
