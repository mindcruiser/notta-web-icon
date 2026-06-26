import React from 'react';

const PublicInbox = ({
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
        d="M2 13.536a4 4 0 01.14-1.053l2.056-7.535A4 4 0 018.056 2h7.889a4 4 0 013.859 2.948l2.055 7.535c.094.343.141.697.141 1.053V18a4 4 0 01-4 4H6a4 4 0 01-4-4v-4.464zM8.055 4h7.89a2 2 0 011.93 1.474L19.926 13H16c-.552 0-.984.46-1.164.982a3.001 3.001 0 01-5.672 0C8.984 13.46 8.552 13 8 13H4.073l2.053-7.526A2 2 0 018.056 4zM4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3h-2.762c-.397 0-.75.24-.955.58A4.997 4.997 0 0112 18a4.997 4.997 0 01-4.283-2.42c-.206-.34-.558-.58-.955-.58H4z"
      ></path>
    </svg>
  );
};

export default PublicInbox;
