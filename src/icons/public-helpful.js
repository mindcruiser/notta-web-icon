import React from 'react';

const PublicHelpful = ({
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
        d="M1.978 19.334A3.08 3.08 0 005.074 22h12.848a2.8 2.8 0 002.794-2.38l1.242-8.1a2.8 2.8 0 00-2.794-3.22H14.77V5.7a3.7 3.7 0 00-3.7-3.7 1 1 0 00-.914.594L6.864 10h-1.79c-1.622-.024-2.896 1.288-3.096 2.766a1 1 0 00-.009.134v6.3a1 1 0 00.01.134zm3.07.666a1.079 1.079 0 01-1.079-.878v-6.145c.106-.58.612-.986 1.08-.977h1.42v8H5.05zm13.69-.68a.8.8 0 01-.8.68H8.47v-8.688l3.202-7.203a1.7 1.7 0 011.098 1.59v3.6a1 1 0 001 1h5.412a.8.8 0 01.8.92l-1.242 8.1z"
      ></path>
    </svg>
  );
};

export default PublicHelpful;
