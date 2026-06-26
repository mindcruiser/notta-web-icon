import React from 'react';

const RecordsProhibitPlaying = ({
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
      <path d="M16.672 4.267a.75.75 0 00-1.06 0L12.327 7.55 8.555 5.036A1 1 0 007 5.87v7.01l-4.47 4.47a.75.75 0 101.061 1.06L16.672 5.327a.75.75 0 000-1.06z"></path>
      <path d="M7 18.131v-1.01l7.873-7.873 2.879 1.92a1 1 0 010 1.664l-9.197 6.131A1 1 0 017 18.131z"></path>
    </svg>
  );
};

export default RecordsProhibitPlaying;
