import React from 'react';

const ToolsExpired = ({
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
      <path d="M17.986 11.44a7 7 0 10-7.737 6.52l-1.07 1.855a9 9 0 1110.3-5.79l-1.493-2.584z"></path>
      <path d="M11 6a1 1 0 011 1v4a1 1 0 01-.293.707l-2 2a1 1 0 01-1.414-1.414L10 10.586V7a1 1 0 011-1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.866 11.5a1 1 0 00-1.732 0l-5.196 9a1 1 0 00.866 1.5h10.392a1 1 0 00.866-1.5l-5.196-9zM16 21a1 1 0 100-2 1 1 0 000 2zm-.75-6.75a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0v-3z"
      ></path>
    </svg>
  );
};

export default ToolsExpired;
