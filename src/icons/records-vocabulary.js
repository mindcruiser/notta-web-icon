import React from 'react';

const RecordsVocabulary = ({
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
        d="M14 4h3a2 2 0 012 2v10H6c-.35 0-.687.06-1 .17V6a2 2 0 012-2v5a1 1 0 001.625.78l1.875-1.5 1.875 1.5A1 1 0 0014 9V4zm7 2v13a3 3 0 01-3 3H6a3 3 0 01-3-3V6a4 4 0 014-4h10a4 4 0 014 4zM6 18h13v1a1 1 0 01-1 1H6a1 1 0 110-2zm6-14v2.92l-.875-.7a1 1 0 00-1.25 0L9 6.92V4h3zm1 8a1 1 0 100 2h4a1 1 0 100-2h-4z"
      ></path>
    </svg>
  );
};

export default RecordsVocabulary;
