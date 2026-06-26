import React from 'react';

const AccountVocabulary = ({
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
        d="M2 7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V7zm4 0H4v2h2V7z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 15a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm4 0H4v2h2v-2z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V7zm4 0h-2v2h2V7z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 15a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zm4 0h-2v2h2v-2z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V7zm4 0h-2v2h2V7z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 15a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zm4 0h-2v2h2v-2z"
      ></path>
    </svg>
  );
};

export default AccountVocabulary;
