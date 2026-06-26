import React from 'react';

const SessionFileSearchLine = ({
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
      <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.998 2h11.588a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707v13.579A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zm10.529 11.454a4.001 4.001 0 01-4.86-6.274 4 4 0 016.274 4.86l2.21 2.21-1.413 1.415-2.211-2.21zm-.618-2.032a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828z"></path>
    </svg>
  );
};

export default SessionFileSearchLine;
