import React from 'react';

const PublicAddOn = ({
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
        d="M19 3a1 1 0 10-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 102 0V7h2a1 1 0 100-2h-2V3zm-8.005-.645L3.526 13.42a.5.5 0 00.415.78h3.572a.5.5 0 01.495.572l-.939 6.494c-.072.498.554.778.877.393l8.362-9.937a.5.5 0 00-.382-.822h-3.517a.5.5 0 01-.5-.5V2.635a.5.5 0 00-.914-.28z"
      ></path>
    </svg>
  );
};

export default PublicAddOn;
