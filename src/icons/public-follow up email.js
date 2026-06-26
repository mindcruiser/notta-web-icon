import React from 'react';

const PublicFollowUpEmail = ({
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
        d="M19.293 11.793a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-5 5A1 1 0 0117 20.5h-2a1 1 0 01-1-1v-2a1 1 0 01.293-.707l5-5zM16 17.914v.586h.586l4-4-.586-.586-4 4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7.5a4 4 0 014-4h12a4 4 0 014 4v1.853a1 1 0 11-2 0V7.5a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2h5a1 1 0 110 2H6a4 4 0 01-4-4v-9z"
      ></path>
      <path d="M4.007 7.334l6.676 5.842a2 2 0 002.634 0l6.676-5.841a2.001 2.001 0 00-1.151-1.65L12 11.671 5.16 5.685a2.001 2.001 0 00-1.152 1.65z"></path>
    </svg>
  );
};

export default PublicFollowUpEmail;
