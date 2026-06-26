import React from 'react';

const SideBarAddFolderOutlined = ({
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
        d="M6 2.5a4 4 0 00-4 4v11a4 4 0 004 4h12a4 4 0 004-4v-9a4 4 0 00-4-4h-4.448a2 2 0 01-1.249-.438l-1.13-.905A3 3 0 009.297 2.5H6zm-2 4a2 2 0 012-2h3.298a1 1 0 01.625.22l1.13.903a4 4 0 002.5.877H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-11z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9c.552 0 1 .512 1 1.143v5.714c0 .631-.448 1.143-1 1.143s-1-.512-1-1.143v-5.714C11 9.512 11.448 9 12 9z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 13c0-.552.512-1 1.143-1h5.714c.631 0 1.143.448 1.143 1s-.512 1-1.143 1H9.143C8.512 14 8 13.552 8 13z"
      ></path>
    </svg>
  );
};

export default SideBarAddFolderOutlined;
