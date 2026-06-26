import React from 'react';

const PublicRename = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.667 2a1 1 0 100 2c.917 0 1.66.74 1.666 1.655V12h-1a1 1 0 100 2h1v4.345A1.666 1.666 0 0115.667 20a1 1 0 100 2c1.05 0 1.998-.442 2.666-1.15A3.657 3.657 0 0021 22a1 1 0 100-2 1.666 1.666 0 01-1.667-1.658V14h1a1 1 0 100-2h-1V5.658A1.666 1.666 0 0121 4a1 1 0 100-2c-1.05 0-1.998.442-2.667 1.15A3.656 3.656 0 0015.667 2zM7.94 4a1 1 0 00-.932.638L2.094 17.305a1 1 0 001.865.723l1.045-2.695h6.685l1.045 2.695a1 1 0 101.865-.723L9.686 4.638A1 1 0 008.753 4H7.94zm2.973 9.333L8.347 6.717 5.78 13.333h5.133z"
      ></path>
    </svg>
  );
};

export default PublicRename;
