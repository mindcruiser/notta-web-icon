import React from 'react';

const PublicTipsRightMinimized = ({
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
        d="M12 4a1 1 0 01-1-1V1a1 1 0 112 0v2a1 1 0 01-1 1zm7 10v4H5v-4a7 7 0 0114 0zM3 14a9 9 0 0118 0v5.118a.882.882 0 01-.882.882H3.882A.882.882 0 013 19.118V14zm6 0c0-1.26.41-1.976.86-2.385.474-.43 1.095-.615 1.64-.615a1 1 0 000-2c-.955 0-2.083.315-2.985 1.135C7.589 10.976 7 12.261 7 14a1 1 0 102 0zM4.121 5.793a1 1 0 101.414-1.414L4.122 2.964A1 1 0 102.707 4.38l1.414 1.414zm14.293 0a1 1 0 001.414 0l1.415-1.414a1 1 0 00-1.415-1.415L18.414 4.38a1 1 0 000 1.414zM4 21a1 1 0 100 2h16a1 1 0 000-2H4z"
      ></path>
    </svg>
  );
};

export default PublicTipsRightMinimized;
