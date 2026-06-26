import React from 'react';

const PublicMicrophoneOff = ({
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
      <path d="M14 6v4.586l1.766 1.766c.151-.423.234-.878.234-1.352V6a4 4 0 00-7.81-1.224L10 6.586V6a2 2 0 114 0z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 9.414L2.293 3.707a1 1 0 011.414-1.414l18 18a1 1 0 01-1.414 1.414l-4.699-4.699A6.956 6.956 0 0113 17.93V20h2a1 1 0 110 2H9a1 1 0 110-2h2v-2.07A7.001 7.001 0 015 11a1 1 0 112 0 5 5 0 007.117 4.531l-.765-.765A4 4 0 018 11V9.414zm3.53 3.53a2.003 2.003 0 01-1.474-1.474l1.474 1.474z"
      ></path>
      <path d="M16.531 13.117l1.477 1.477c.63-1.05.992-2.28.992-3.594a1 1 0 10-2 0c0 .757-.168 1.474-.469 2.117z"></path>
    </svg>
  );
};

export default PublicMicrophoneOff;
