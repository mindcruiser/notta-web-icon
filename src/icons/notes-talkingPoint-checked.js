import React from 'react';

const NotesTalkingPointChecked = ({
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm-.29-4.707a1 1 0 01-1.414 0l-2.829-2.829a1 1 0 011.414-1.414l2.122 2.122 4.95-4.95a1 1 0 011.414 1.414l-5.657 5.657z"></path>
    </svg>
  );
};

export default NotesTalkingPointChecked;
