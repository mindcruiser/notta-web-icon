import React from 'react';

const NotesText = ({ color = 'currentColor', size = '16', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M11.246 15H4.754l-1.749 4.371a1 1 0 11-1.856-.742l5.6-14A1 1 0 017.677 4h.646a1 1 0 01.928.629l5.6 14a1 1 0 01-1.856.742L11.246 15zm-.8-2L8 6.885 5.554 13h4.892zM21 12.535c0-.296.24-.535.535-.535H22a1 1 0 011 1v6a1 1 0 01-1 1h-.465a.535.535 0 01-.535-.535 4 4 0 110-6.93zM19 18a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

export default NotesText;
