import React from 'react';

const NotesMention = ({
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
        d="M8.677 2.569A10 10 0 0122 12v1.286a3.572 3.572 0 01-6.485 2.066 4.857 4.857 0 11-.656-7.278 1 1 0 011.998.069v5.143a1.571 1.571 0 003.143 0V12a8 8 0 10-5.035 7.43 1 1 0 01.74 1.858 10 10 0 11-7.028-18.72zm6.18 9.433v-.004a2.857 2.857 0 100 .004z"
      ></path>
    </svg>
  );
};

export default NotesMention;
