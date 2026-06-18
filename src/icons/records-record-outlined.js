import React from 'react';

const RecordsRecordOutlined = ({
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
        d="M12 2a5 5 0 00-5 5v6a5 5 0 0010 0V7a5 5 0 00-5-5zM9 7a3 3 0 116 0v6a3 3 0 11-6 0V7zm-4.802 7.779a1 1 0 00-1.95.442C3.258 19.675 7.24 23 12 23c4.76 0 8.742-3.325 9.752-7.779a1 1 0 00-1.95-.442 8.004 8.004 0 01-15.604 0z"
      ></path>
    </svg>
  );
};

export default RecordsRecordOutlined;
