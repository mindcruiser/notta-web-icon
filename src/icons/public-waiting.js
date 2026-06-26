import React from 'react';

const PublicWaiting = ({
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
      <path d="M11.293 15.707l-2.44 2.439a.5.5 0 00.354.854h5.586a.5.5 0 00.354-.854l-2.44-2.44a1 1 0 00-1.414 0z"></path>
      <path d="M15.003 7H8.997c-.276 0-.49.228-.381.482.447 1.05 2.1 2.517 3.384 2.518.89 0 2.971-1.19 3.416-2.51.088-.262-.137-.49-.413-.49z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2a1 1 0 000 2v1.64a6.933 6.933 0 003.366 5.945.483.483 0 010 .829A6.933 6.933 0 005 18.358V20a1 1 0 100 2h14a1 1 0 100-2v-1.642a6.933 6.933 0 00-3.366-5.944.483.483 0 010-.829A6.933 6.933 0 0019 5.64V4a1 1 0 100-2H5zm12 18v-1.642a4.933 4.933 0 00-2.395-4.23c-1.607-.964-1.607-3.293 0-4.258A4.933 4.933 0 0017 5.64V4H7v1.64c0 1.733.91 3.339 2.395 4.23 1.607.965 1.607 3.294 0 4.259A4.933 4.933 0 007 18.359v1.64h10z"
      ></path>
    </svg>
  );
};

export default PublicWaiting;
