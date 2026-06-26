import React from 'react';

const RecordsTextArea = ({
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
        d="M21.686 12.435c.402-.402.412-1.045.021-1.435-.39-.39-1.033-.381-1.435.02l-9.263 9.264c-.402.402-.411 1.044-.02 1.434.39.391 1.032.382 1.434-.02l9.263-9.263zm.021 6.272a1 1 0 00-1.414-1.414l-3 3a1 1 0 101.414 1.414l3-3z"
      ></path>
    </svg>
  );
};

export default RecordsTextArea;
