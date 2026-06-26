import React from 'react';

const PublicNotHelpful = ({
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
        d="M21.98 4.666A3.079 3.079 0 0018.886 2H6.037a2.8 2.8 0 00-2.794 2.38l-1.242 8.1a2.8 2.8 0 002.794 3.22H9.19v2.6a3.7 3.7 0 003.7 3.7 1 1 0 00.913-.594L17.095 14h1.79c1.622.024 2.896-1.288 3.096-2.766.006-.044.009-.09.009-.134V4.8c0-.045-.003-.09-.01-.134zM18.91 4c.529-.01.983.364 1.08.878v6.145c-.106.58-.612.986-1.08.977h-1.42V4h1.42zm-13.69.68a.8.8 0 01.8-.68h9.47v8.688l-3.202 7.203a1.7 1.7 0 01-1.098-1.59v-3.6a1 1 0 00-1-1H4.778a.8.8 0 01-.8-.92l1.242-8.1z"
      ></path>
    </svg>
  );
};

export default PublicNotHelpful;
