import React from 'react';

const PublicCrm = ({ color = 'currentColor', size = '16', ...otherProps }) => {
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
        d="M5 7a2 2 0 100-4 2 2 0 000 4zm0 2c.742 0 1.436-.202 2.032-.554l2.26 2.26C9.105 11.099 9 11.537 9 12c0 .469.107.912.3 1.307l-2.255 2.255a4 4 0 101.409 1.42l2.267-2.268c.388.184.821.286 1.279.286.463 0 .902-.105 1.293-.292l2.26 2.26a4 4 0 101.414-1.414l-2.26-2.26c.188-.392.293-.83.293-1.294 0-.458-.102-.891-.286-1.28l2.267-2.266a4 4 0 10-1.42-1.409L13.308 9.3A2.988 2.988 0 0012 9c-.463 0-.902.105-1.293.292l-2.26-2.26A4 4 0 105 9zm16-4a2 2 0 11-4 0 2 2 0 014 0zm-2 16a2 2 0 100-4 2 2 0 000 4zM7 19a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
    </svg>
  );
};

export default PublicCrm;
