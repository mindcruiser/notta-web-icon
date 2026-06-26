import React from 'react';

const PublicAddCircleFilled = ({
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 6.05a1.1 1.1 0 00-1.1 1.1v2.75H8.15a1.1 1.1 0 100 2.2h2.75v2.75a1.1 1.1 0 102.2 0V13.1h2.75a1.1 1.1 0 100-2.2H13.1V8.15a1.1 1.1 0 00-1.1-1.1z"></path>
    </svg>
  );
};

export default PublicAddCircleFilled;
