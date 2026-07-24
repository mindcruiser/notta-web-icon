import React from 'react';

const RecordsEngine = ({
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
      <path d="M19.66 7.577L12 3.154 4.34 7.577v8.845L12 20.845l7.66-4.423V7.577zm2 9.423a1 1 0 01-.5.866l-8.66 5a1 1 0 01-1 0l-8.66-5a1 1 0 01-.5-.866V7a1 1 0 01.5-.866l8.66-5 .12-.059a1 1 0 01.88.059l8.66 5a1 1 0 01.5.866v10z"></path>
      <path d="M11 5.5a1 1 0 112 0v5.922l4.697 2.712a1 1 0 01-1 1.732L12 13.154l-4.696 2.712a1 1 0 01-1-1.732L11 11.422V5.5z"></path>
    </svg>
  );
};

export default RecordsEngine;
