import React from 'react';

const PublicHelpfulFilled = ({
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
      <path d="M5 21.798a.19.19 0 01-.202.193 3.079 3.079 0 01-2.82-2.657 1 1 0 01-.009-.134v-6.3a1 1 0 01.01-.134c.188-1.393 1.33-2.638 2.819-2.757a.19.19 0 01.202.193v11.596z"></path>
      <path d="M7 21.53c0 .26.21.47.47.47h10.452a2.8 2.8 0 002.794-2.38l1.242-8.1a2.8 2.8 0 00-2.794-3.22H14.77V5.7a3.7 3.7 0 00-3.7-3.7 1 1 0 00-.914.594L7.172 9.306a2 2 0 00-.172.812V21.53z"></path>
    </svg>
  );
};

export default PublicHelpfulFilled;
