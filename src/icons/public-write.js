import React from 'react';

const PublicWrite = ({
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
        d="M6 2a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-5.25a1 1 0 10-2 0V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h5.25a1 1 0 100-2H6zm12.123 2.026a.333.333 0 01.364.073l1.416 1.415.003.003a.333.333 0 010 .473l-.004.004-7.39 7.416-2.295.413.384-2.337 7.41-7.383.004-.005a.332.332 0 01.108-.072zM18.251 2a2.333 2.333 0 00-1.654.688l-7.636 7.61a1 1 0 00-.281.545l-.667 4.053a1 1 0 001.164 1.146l4-.72a1 1 0 00.53-.278l7.61-7.636a2.333 2.333 0 000-3.309l-.002-.002-1.408-1.407-.001-.002A2.332 2.332 0 0018.25 2z"
      ></path>
    </svg>
  );
};

export default PublicWrite;
