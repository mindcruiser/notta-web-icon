import React from 'react';

const PublicPremium = ({
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
      <path d="M5.526 13.42l7.469-11.065a.5.5 0 01.914.28V10.4a.5.5 0 00.5.5h3.517a.5.5 0 01.382.822l-8.362 9.937c-.323.385-.949.105-.877-.393l.94-6.494a.5.5 0 00-.496-.572H5.941a.5.5 0 01-.415-.78z"></path>
    </svg>
  );
};

export default PublicPremium;
