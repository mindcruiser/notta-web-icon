import React from 'react';

const PublicMicrophoneOn = ({
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
        d="M12 2a4 4 0 00-4 4v5a4 4 0 008 0V6a4 4 0 00-4-4zm-2 4a2 2 0 114 0v5a2 2 0 11-4 0V6z"
      ></path>
      <path d="M7 11a1 1 0 10-2 0 7.001 7.001 0 006 6.93V20H9a1 1 0 100 2h6a1 1 0 100-2h-2v-2.07A7.001 7.001 0 0019 11a1 1 0 10-2 0 5 5 0 01-10 0z"></path>
    </svg>
  );
};

export default PublicMicrophoneOn;
