import React from 'react';

const PublicActionItem = ({
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
        d="M9.5 7.75a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zM8.104 6.396a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-1-1a.5.5 0 11.708-.708l.646.647 1.646-1.647a.5.5 0 01.708 0z"
      ></path>
      <path d="M12 6.5A1.25 1.25 0 1012 9h8a1.25 1.25 0 100-2.5h-8z"></path>
      <path d="M12 15a1.25 1.25 0 100 2.5h8a1.25 1.25 0 100-2.5h-8z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 16.25a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zM6.25 17.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
      ></path>
    </svg>
  );
};

export default PublicActionItem;
