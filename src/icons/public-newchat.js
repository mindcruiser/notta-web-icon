import React from 'react';

const PublicNewchat = ({
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
      <path d="M19 3a3 3 0 013 3v10a3 3 0 01-3 3H7.667c-.216 0-.428.07-.6.2L5.2 20.6c-1.318.988-3.2.048-3.2-1.6V6a3 3 0 013-3h14zM5 5a1 1 0 00-1 1v13l1.866-1.4c.52-.39 1.152-.6 1.801-.6H19a1 1 0 001-1V6a1 1 0 00-1-1H5zm6.994 2a1 1 0 011 1v2.002L14.998 10a.999.999 0 011.002.995c0 .55-.447.997-1 .997l-2.006.002V14a1 1 0 11-2 0v-2.003L9.002 12A.999.999 0 018 11.005c0-.55.447-.997 1-.997l1.994-.003V8a1 1 0 011-1z"></path>
    </svg>
  );
};

export default PublicNewchat;
