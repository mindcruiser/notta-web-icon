import React from 'react';

const LoginSso = ({ color = 'currentColor', size = '16', ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M14.597 2a7.419 7.419 0 00-7.318 6.253 7.412 7.412 0 00.27 3.449l-5.332 5.33a.74.74 0 00-.217.524v3.703a.74.74 0 00.741.741h3.705a.74.74 0 00.741-.74v-1.482h1.482a.741.741 0 00.741-.741v-1.481h1.482a.744.744 0 00.524-.217l.886-.886a7.413 7.413 0 009.606-5.884A7.405 7.405 0 0014.597 2zm1.853 7.037a1.483 1.483 0 01-.29-2.934 1.482 1.482 0 11.29 2.934z"></path>
    </svg>
  );
};

export default LoginSso;
