import React from 'react';

const PublicFavoriteOff = ({
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
        d="M6.956 8.016L2.707 3.768a1 1 0 111.414-1.415l18.385 18.385a1 1 0 01-1.414 1.414l-2.169-2.168.235 1.344a1 1 0 01-1.456 1.055L12 19.343l-5.701 3.04a1 1 0 01-1.456-1.056l1.111-6.318-4.652-4.548a1 1 0 01.556-1.705l5.099-.74zm9.508 9.508l.371 2.13-4.365-2.327a1 1 0 00-.941 0l-4.362 2.325.847-4.816a1 1 0 00-.285-.889l-3.583-3.502L8.72 9.78l7.743 7.743zm3.394-7.08l-2.526 2.474 1.414 1.414L22.7 10.46a1 1 0 00-.556-1.704l-6.385-.931-2.864-5.77a1 1 0 00-1.794.005L9.58 5.166l1.495 1.494.93-1.899L14.2 9.183a1 1 0 00.751.545l4.907.716z"
      ></path>
    </svg>
  );
};

export default PublicFavoriteOff;
