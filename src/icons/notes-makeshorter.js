import React from 'react';

const NotesMakeshorter = ({
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
        d="M4 9a1 1 0 100 2h16a1 1 0 100-2H4zm0 5a1 1 0 100 2h11a1 1 0 100-2H4z"
      ></path>
    </svg>
  );
};

export default NotesMakeshorter;
