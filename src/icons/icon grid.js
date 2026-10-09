import React from 'react';

const IconGrid = ({ color = 'currentColor', size = '16', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_1291_632)">
        <path d="M.025.025h23.95v23.95H.025V.025z"></path>
        <path d="M0 0l24 24"></path>
        <path d="M24 0L0 24"></path>
        <path d="M12 0v24"></path>
        <path d="M24 12H0"></path>
        <path d="M24 8H0"></path>
        <path d="M24 16H0"></path>
        <path d="M12 24V0"></path>
        <path d="M16 24V0"></path>
        <path d="M8 24V0"></path>
        <path d="M5 2.025h14c.538 0 .975.437.975.975v18a.975.975 0 01-.975.975H5A.975.975 0 014.025 21V3c0-.538.437-.975.975-.975z"></path>
        <path d="M21.975 5v14a.975.975 0 01-.975.975H3A.975.975 0 012.025 19V5c0-.538.437-.975.975-.975h18c.538 0 .975.437.975.975z"></path>
        <path d="M4 3.025h16c.538 0 .975.437.975.975v16a.975.975 0 01-.975.975H4A.975.975 0 013.025 20V4c0-.538.437-.975.975-.975z"></path>
        <path d="M21.975 12c0 5.509-4.466 9.975-9.975 9.975-5.509 0-9.975-4.466-9.975-9.975 0-5.509 4.466-9.975 9.975-9.975 5.509 0 9.975 4.466 9.975 9.975z"></path>
        <path d="M16.975 12a4.975 4.975 0 11-9.95 0 4.975 4.975 0 019.95 0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1291_632">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconGrid;
