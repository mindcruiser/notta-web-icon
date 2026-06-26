import React from 'react';

const PublicLogoShowcase = ({
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
      <path d="M12.002 2c-.1 0-.2 0-.3.01V2H2v10c0 5.517 4.474 10 10.002 10C17.532 22 22 17.522 22 12S17.53 2 12.002 2zm0 15.332A5.335 5.335 0 016.67 12a5.342 5.342 0 015.333-5.337 5.335 5.335 0 010 10.669z"></path>
    </svg>
  );
};

export default PublicLogoShowcase;
