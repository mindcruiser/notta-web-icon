import React from 'react';

const RecordsSpeakerName = ({
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
        d="M11.612 1a7 7 0 100 14h.776a7 7 0 006.967-6.323C19.755 4.563 16.523 1 12.389 1h-.776zM6.635 8.484A5 5 0 0111.612 3h.776a5 5 0 010 10h-.776a5 5 0 01-4.977-4.516zM9 16a7 7 0 00-7 7 1 1 0 102 0 5 5 0 015-5h6a5 5 0 015 5 1 1 0 102 0 7 7 0 00-7-7H9zm3-9.5a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm4 1a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
      ></path>
    </svg>
  );
};

export default RecordsSpeakerName;
