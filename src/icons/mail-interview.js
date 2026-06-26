import React from 'react';

const MailInterview = ({
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
        d="M9 9a2.99 2.99 0 001.152-.23A5.005 5.005 0 0112 6a3 3 0 10-3 3zm0-2a1 1 0 100-2 1 1 0 000 2z"
      ></path>
      <path d="M7 10h3c0 .711.148 1.387.416 2H7a1 1 0 00-1 1v1h6a4.993 4.993 0 00-4 2H3a1 1 0 110-2h1v-1a3 3 0 013-3z"></path>
      <path d="M22 15c0 .261-.1.499-.264.677A4.987 4.987 0 0018 14h3a1 1 0 011 1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 14a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 19a4 4 0 014-4h6a4 4 0 014 4v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2zm4-2a2 2 0 00-2 2v1h10v-1a2 2 0 00-2-2h-6z"
      ></path>
    </svg>
  );
};

export default MailInterview;
