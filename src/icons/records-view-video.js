import React from 'react';

const RecordsViewVideo = ({
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
        d="M11.03 8.652A1 1 0 009.5 9.5v5a1 1 0 001.53.848l4-2.5a1 1 0 000-1.696l-4-2.5zM12.613 12l-1.113.696v-1.392l1.113.696z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2v-2.955A.618.618 0 0023 16v-2-3.955V8 5a2 2 0 00-2-2H3zm0 16v-3h2v3H3zm2-5H3v-4h2v4zm12 5H7V5h10v14zm2 0v-3h2v3h-2zm0-14v3h2V5h-2zM3 5v3h2V5H3zm18 5v4h-2v-4h2z"
      ></path>
    </svg>
  );
};

export default RecordsViewVideo;
