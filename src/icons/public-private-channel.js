import React from 'react';

const PublicPrivateChannel = ({
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
        d="M12 3.6c2.094 0 3.792 1.645 3.792 3.675V8.85H8.208V7.275C8.208 5.245 9.906 3.6 12 3.6zM6.042 8.882V7.275C6.042 4.085 8.709 1.5 12 1.5c3.29 0 5.958 2.586 5.958 5.775v1.607c2.138.259 3.792 2.026 3.792 4.168v5.25c0 2.32-1.94 4.2-4.333 4.2H6.583c-2.393 0-4.333-1.88-4.333-4.2v-5.25c0-2.142 1.654-3.91 3.792-4.168zm10.833 2.068h.542c1.196 0 2.166.94 2.166 2.1v5.25c0 1.16-.97 2.1-2.166 2.1H6.583c-1.196 0-2.166-.94-2.166-2.1v-5.25c0-1.16.97-2.1 2.166-2.1h10.292z"
      ></path>
    </svg>
  );
};

export default PublicPrivateChannel;
