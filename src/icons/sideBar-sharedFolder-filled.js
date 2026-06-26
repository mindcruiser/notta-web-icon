import React from 'react';

const SideBarSharedFolderFilled = ({
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
        d="M1 6.5a4 4 0 014-4h4.133a3 3 0 011.753.565l1.469 1.058a2 2 0 001.168.377H19a4 4 0 014 4v9a4 4 0 01-4 4H5a4 4 0 01-4-4v-11zm9.313 5.58a1.687 1.687 0 100-3.375 1.687 1.687 0 000 3.375zm-1.126.844c-.931 0-1.687.755-1.687 1.687v1.125c0 .31.252.563.563.563h4.5c.31 0 .562-.252.562-.563v-1.125c0-.932-.755-1.687-1.688-1.687h-2.25zm6.188-1.97a1.406 1.406 0 11-2.813 0 1.406 1.406 0 012.813 0zm-1.723 5.063h2.286c.31 0 .562-.252.562-.562V14.33c0-.621-.504-1.125-1.125-1.125h-2.181c.309.385.493.874.493 1.406v1.125c0 .097-.012.191-.035.281z"
      ></path>
    </svg>
  );
};

export default SideBarSharedFolderFilled;
