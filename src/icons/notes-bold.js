import React from 'react';

const NotesBold = ({ color = 'currentColor', size = '16', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M8 11h4.5a2.5 2.5 0 000-5H8v5zm10 4.5a4.501 4.501 0 01-4.5 4.5H7a1 1 0 01-1-1V5a1 1 0 011-1h5.5a4.5 4.5 0 013.256 7.606A4.5 4.5 0 0118 15.5zM8 13v5h5.5a2.5 2.5 0 000-5H8z"></path>
    </svg>
  );
};

export default NotesBold;
