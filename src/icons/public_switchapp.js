import React from 'react';

const PublicSwitchapp = ({
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
      <path d="M8.003 18h-2v-2h2v2zm5 0h-2v-2h2v2zm5 0h-2v-2h2v2zm-10-5h-2v-2h2v2zm5 0h-2v-2h2v2zm5 0h-2v-2h2v2zM8 8H6V6h2v2zm5 0h-2V6h2v2zm5 0h-2V6h2v2z"></path>
    </svg>
  );
};

export default PublicSwitchapp;
