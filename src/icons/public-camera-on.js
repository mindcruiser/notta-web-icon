import React from 'react';

const PublicCameraOn = ({
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
        d="M1 8a3 3 0 013-3h11a3 3 0 013 3v.454l1.615-1.55C20.886 5.683 23 6.583 23 8.345v7.468c0 1.713-2.012 2.633-3.308 1.514L18 15.866V16a3 3 0 01-3 3H4a3 3 0 01-3-3V8zm15 5.674V16a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h11a1 1 0 011 1V13.674zm2-.451l3 2.591V8.346l-3 2.88v1.996z"
      ></path>
    </svg>
  );
};

export default PublicCameraOn;
