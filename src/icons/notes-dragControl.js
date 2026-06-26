import React from 'react';

const NotesDragControl = ({
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
      <path d="M8.9 4.4a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"></path>
      <path d="M8.9 10.4a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"></path>
      <path d="M7.3 18a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0z"></path>
      <path d="M15.1 4.4a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"></path>
      <path d="M13.5 12a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0z"></path>
      <path d="M15.1 16.4a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"></path>
    </svg>
  );
};

export default NotesDragControl;
