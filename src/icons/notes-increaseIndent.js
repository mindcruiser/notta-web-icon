import React from 'react';

const NotesIncreaseIndent = ({
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
      <path d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 15a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm8-5a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zm0-5a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zm-4.43 2.124a.5.5 0 010 .752l-2.74 2.398a.5.5 0 01-.83-.376v-4.796a.5.5 0 01.83-.376l2.74 2.398z"></path>
    </svg>
  );
};

export default NotesIncreaseIndent;
