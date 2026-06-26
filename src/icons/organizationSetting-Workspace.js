import React from 'react';

const OrganizationSettingWorkspace = ({
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
      <path d="M5 20.167a1.167 1.167 0 110-2.334 1.167 1.167 0 010 2.334zM1.5 19a3.5 3.5 0 104.667-3.3v-.2A2.333 2.333 0 018.5 13.167h7a2.333 2.333 0 012.333 2.333v.2A3.501 3.501 0 0019 22.5a3.5 3.5 0 001.167-6.8v-.2a4.667 4.667 0 00-4.667-4.667h-2.333V8.301A3.501 3.501 0 0012 1.5a3.5 3.5 0 00-1.167 6.8v2.533H8.5A4.667 4.667 0 003.833 15.5v.2A3.501 3.501 0 001.5 19zM19 20.167a1.167 1.167 0 110-2.334 1.167 1.167 0 010 2.334zm-7-14a1.167 1.167 0 110-2.334 1.167 1.167 0 010 2.334z"></path>
    </svg>
  );
};

export default OrganizationSettingWorkspace;
