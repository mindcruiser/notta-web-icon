import React from 'react';

const RecordsMarkerPoints = ({
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
      <path d="M6 3.5A1.5 1.5 0 017.5 2h9A1.5 1.5 0 0118 3.5v13.43a2 2 0 01-.89 1.664l-4.278 2.851a1.5 1.5 0 01-1.664 0L6.89 18.594A2 2 0 016 16.93V3.5z"></path>
    </svg>
  );
};

export default RecordsMarkerPoints;
