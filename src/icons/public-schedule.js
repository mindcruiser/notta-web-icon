import React from 'react';

const PublicSchedule = ({
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
      <path d="M2 12C2 6.477 6.49 2 12.027 2c5.162 0 9.412 3.889 9.967 8.89a1.002 1.002 0 01-1.994.22C19.557 7.111 16.156 4 12.027 4c-4.43 0-8.022 3.582-8.022 8s3.592 8 8.022 8c.554 0 1.003.448 1.003 1s-.449 1-1.003 1C6.49 22 2 17.523 2 12z"></path>
      <path d="M14.213 17.633l3.476-5.097a.2.2 0 01.365.112v3.206c0 .11.09.2.2.2h2.11a.2.2 0 01.162.318l-3.732 5.13a.2.2 0 01-.362-.117v-3.24a.2.2 0 00-.2-.2h-1.854a.2.2 0 01-.165-.312z"></path>
      <path d="M11 8a1 1 0 112 0v4.914l-2.293 2.293a1 1 0 11-1.414-1.414L11 12.086V8z"></path>
    </svg>
  );
};

export default PublicSchedule;
