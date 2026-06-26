import React from 'react';

const MailPodcast = ({
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
        d="M13 10a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 20a3 3 0 01-3-3V7a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H5zM5 6h14a1 1 0 011 1v10a1 1 0 01-1 1h-.5v-4.5a1 1 0 00-.293-.707l-1.5-1.5a1 1 0 00-1.414 1.414l1.207 1.207V18H15v-1a3 3 0 00-3-3H8a3 3 0 00-3 3v1a1 1 0 01-1-1V7a1 1 0 011-1zm2 12h6v-1a1 1 0 00-1-1H8a1 1 0 00-1 1v1z"
      ></path>
    </svg>
  );
};

export default MailPodcast;
