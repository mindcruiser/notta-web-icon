import React from 'react';

const NotesTextColor = ({
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
      <path d="M15.246 15H8.754l-1.749 4.371a1 1 0 11-1.856-.742l5.6-14A1 1 0 0111.677 4h.646a1 1 0 01.928.629l5.6 14a1 1 0 11-1.856.742L15.246 15zm-.8-2L12 6.885 9.554 13h4.892z"></path>
    </svg>
  );
};

export default NotesTextColor;
