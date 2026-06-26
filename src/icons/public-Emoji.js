import React from 'react';

const PublicEmoji = ({
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm-4.9-6.007c-.11-.54.348-.993.9-.993s.984.46 1.165.982a3 3 0 005.67 0c.18-.522.613-.982 1.165-.982s1.01.452.9.993a5 5 0 01-9.8 0zM8 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm8 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path>
    </svg>
  );
};

export default PublicEmoji;
