import React from 'react';

const PublicSummary = ({
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
      <path d="M15 4a1 1 0 100 2h5a1 1 0 100-2h-5z"></path>
      <path d="M15 8a1 1 0 100 2h5a1 1 0 100-2h-5z"></path>
      <path d="M3 14a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
      <path d="M4 18a1 1 0 100 2h16a1 1 0 100-2H4z"></path>
      <path d="M12.102 8.08a1.92 1.92 0 11-3.839-.052c-.073-.985.215-1.86.776-2.529.617-.735 1.52-1.17 2.498-1.274a.78.78 0 01.164 1.55c-.45.047-.839.199-1.143.423a1.92 1.92 0 011.544 1.883z"></path>
      <path d="M6.84 8.08A1.92 1.92 0 113 8.029c-.072-.985.215-1.86.776-2.529.617-.735 1.52-1.17 2.499-1.274a.78.78 0 01.163 1.55c-.449.047-.838.199-1.143.423A1.92 1.92 0 016.839 8.08z"></path>
    </svg>
  );
};

export default PublicSummary;
