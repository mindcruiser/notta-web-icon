import React from 'react';

const MailWebinar = ({
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
      <path d="M5 5h11a1 1 0 011 1v.1c.739.15 1.419.463 2 .9V6a3 3 0 00-3-3H5a3 3 0 00-3 3v7a3 3 0 003 3h5.354c.705-.622 1.631-1 2.646-1a5.029 5.029 0 01-1-1H5a1 1 0 01-1-1V6a1 1 0 011-1z"></path>
      <path d="M13.14 6.732c.037.03.07.063.102.097a4.996 4.996 0 00-2.24 4.03l-.234.281a1 1 0 01-1.368.16l-1.225-.918-1.394 1.743a1 1 0 11-1.562-1.25l2-2.5A1 1 0 018.6 8.2l1.24.93 1.892-2.27a1 1 0 011.408-.128z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 15a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 19a3 3 0 013-3h6a3 3 0 013 3v2a1 1 0 01-1 1H11a1 1 0 01-1-1v-2zm3-1a1 1 0 00-1 1v1h8v-1a1 1 0 00-1-1h-6z"
      ></path>
    </svg>
  );
};

export default MailWebinar;
