import React from 'react';

const PublicDiscovery = ({
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
        d="M16.898 6.596a.4.4 0 01.506.506l-2.26 6.778a2 2 0 01-1.264 1.265l-6.778 2.259a.4.4 0 01-.506-.506l2.26-6.778a2 2 0 011.264-1.265l6.778-2.259zm-3.484 6.818a2 2 0 11-2.828-2.828 2 2 0 012.828 2.828z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-2 0a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
};

export default PublicDiscovery;
