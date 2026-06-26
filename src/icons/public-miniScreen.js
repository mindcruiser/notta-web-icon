import React from 'react';

const PublicMiniScreen = ({
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
      <path d="M16.5 8.829h3.243a1 1 0 110 2h-5.657a1 1 0 01-1-1V4.172a1 1 0 112 0v3.242l4.121-4.121a1 1 0 111.414 1.414L16.5 8.83z"></path>
      <path d="M3.379 19.293a1 1 0 101.414 1.414l3.95-3.95v3.071a1 1 0 102 0v-5.47-.014-.172a1 1 0 00-1-1H4.086a1 1 0 100 2H7.5L3.38 19.293z"></path>
    </svg>
  );
};

export default PublicMiniScreen;
