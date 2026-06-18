import React from 'react';

const PublicCheckFilled = ({
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
        d="M21.22 4.415a2 2 0 01.365 2.805l-10 13a2 2 0 01-2.865.317l-6-5a2 2 0 112.56-3.073l4.403 3.668 8.732-11.351a2 2 0 012.804-.366z"
      ></path>
    </svg>
  );
};

export default PublicCheckFilled;
