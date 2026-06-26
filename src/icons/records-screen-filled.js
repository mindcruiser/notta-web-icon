import React from 'react';

const RecordsScreenFilled = ({
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
        d="M2 8a2 2 0 012-2h11.5a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8zm16 1.943a.8.8 0 01.376-.678l2.4-1.5A.8.8 0 0122 8.443v7.114a.8.8 0 01-1.224.678l-2.4-1.5a.8.8 0 01-.376-.678V9.943zM5.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      ></path>
    </svg>
  );
};

export default RecordsScreenFilled;
