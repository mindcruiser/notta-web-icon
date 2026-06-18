import React from 'react';

const RecordsPlayDefault = ({
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
      <path d="M17.752 11.168a1 1 0 010 1.664l-9.197 6.131A1 1 0 017 18.131V5.87a1 1 0 011.555-.833l9.197 6.132z"></path>
    </svg>
  );
};

export default RecordsPlayDefault;
