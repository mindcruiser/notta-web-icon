import React from 'react';

const NotesDragCtrlHorizontal = ({
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
      <path d="M19.6 8.9a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0z"></path>
      <path d="M13.6 8.9a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0z"></path>
      <path d="M6 7.3a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2z"></path>
      <path d="M19.6 15.1a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0z"></path>
      <path d="M12 13.5a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2z"></path>
      <path d="M7.6 15.1a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0z"></path>
    </svg>
  );
};

export default NotesDragCtrlHorizontal;
