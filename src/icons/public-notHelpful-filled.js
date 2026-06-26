import React from 'react';

const PublicNotHelpfulFilled = ({
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
      <path d="M18.98 2.202a.19.19 0 01.201-.194 3.079 3.079 0 012.82 2.658c.006.044.01.09.01.134v6.3c0 .045-.004.09-.01.134-.188 1.393-1.33 2.638-2.82 2.757a.19.19 0 01-.201-.193V2.202z"></path>
      <path d="M16.98 2.47a.47.47 0 00-.47-.47H6.057a2.8 2.8 0 00-2.793 2.38l-1.243 8.1a2.8 2.8 0 002.794 3.22H9.21v2.6a3.7 3.7 0 003.7 3.7 1 1 0 00.914-.594l2.983-6.712a2 2 0 00.173-.812V2.469z"></path>
    </svg>
  );
};

export default PublicNotHelpfulFilled;
