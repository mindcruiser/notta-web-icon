import React from 'react';

const RecordsExport = ({
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
      <path d="M11.236 2.35a.998.998 0 01.76-.35h.002c.257 0 .513.097.71.293l4.5 4.5a1 1 0 01-1.415 1.414L12.996 5.41V16a1 1 0 11-2 0V5.418l-2.789 2.79a1 1 0 01-1.414-1.415l4.443-4.444z"></path>
      <path d="M21 12a1 1 0 011 1v6a3 3 0 01-3 3H5a3 3 0 01-3-3v-5.996a1 1 0 112 0V19a1 1 0 001 1h14a1 1 0 001-1v-6a1 1 0 011-1z"></path>
    </svg>
  );
};

export default RecordsExport;
