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
        d="M21.768 3.36a1 1 0 01-.128 1.408c-5.815 4.846-9.202 11.64-10.16 16.428a1 1 0 01-1.71.488l-7.5-8a1 1 0 011.46-1.368L9 16c2.48-5.5 6-9 11.36-12.768a1 1 0 011.408.128z"
      ></path>
    </svg>
  );
};

export default PublicCheckFilled;
