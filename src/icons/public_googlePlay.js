import React from 'react';

const PublicGooglePlay = ({
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
      <path d="M5.585 3l8.997 9-8.997 9a.88.88 0 01-.538-.813V3.813A.884.884 0 015.585 3zm9.622 9.625l2.034 2.034-9.664 5.595 7.63-7.63zm2.826-2.826l2.48 1.437a.884.884 0 010 1.528l-2.48 1.437L15.83 12l2.202-2.201zM7.577 3.746l9.664 5.594-2.034 2.035-7.63-7.63z"></path>
    </svg>
  );
};

export default PublicGooglePlay;
