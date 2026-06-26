import React from 'react';

const PublicErroeFilled = ({
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
        d="M13.417 2.818a1.636 1.636 0 00-2.834 0L2.08 17.546A1.636 1.636 0 003.497 20h17.006a1.636 1.636 0 001.417-2.454L13.417 2.818zM12 18.364a1.636 1.636 0 100-3.273 1.636 1.636 0 000 3.273zM10.773 7.318a1.227 1.227 0 012.454 0v4.91a1.227 1.227 0 01-2.454 0v-4.91z"
      ></path>
    </svg>
  );
};

export default PublicErroeFilled;
