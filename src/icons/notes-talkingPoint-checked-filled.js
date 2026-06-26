import React from 'react';

const NotesTalkingPointCheckedFilled = ({
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
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.704-6.707a1 1 0 001.414 0l5.656-5.657a1 1 0 00-1.414-1.414l-4.949 4.95-2.122-2.122a1 1 0 10-1.414 1.414l2.829 2.829z"></path>
    </svg>
  );
};

export default NotesTalkingPointCheckedFilled;
