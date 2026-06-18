import React from 'react';

const RecordsVoiceprint = ({
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
      <path d="M5 8a1 1 0 012 0v8a1 1 0 11-2 0V8zm-4 3a1 1 0 112 0v2a1 1 0 11-2 0v-2zm8-7a1 1 0 012 0v15a1 1 0 11-2 0V4zm4 1a1 1 0 112 0v15a1 1 0 11-2 0V5zm4 3a1 1 0 112 0v8a1 1 0 11-2 0V8zm4 3a1 1 0 112 0v2a1 1 0 11-2 0v-2z"></path>
    </svg>
  );
};

export default RecordsVoiceprint;
