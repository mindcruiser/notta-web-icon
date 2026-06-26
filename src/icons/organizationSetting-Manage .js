import React from 'react';

const OrganizationSettingManage = ({
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
      <path d="M21.5 19h2v2h-22v-2h2V4a1 1 0 011-1h10a1 1 0 011 1v15h4v-8h-2V9h3a1 1 0 011 1v9zM5.5 5v14h8V5h-8zm2 6h4v2h-4v-2zm0-4h4v2h-4V7z"></path>
    </svg>
  );
};

export default OrganizationSettingManage;
