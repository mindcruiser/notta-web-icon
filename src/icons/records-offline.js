import React from 'react';
import PropTypes from 'prop-types';

const RecordsOffline = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M9.143 4.896A5 5 0 0117 9v.019a6.476 6.476 0 00-3.182.558l1.563 1.563a4.504 4.504 0 015.48 5.474l-.001.005 1.563 1.563.001-.005A6.462 6.462 0 0023 15.5a6.502 6.502 0 00-4.017-6.009 7 7 0 00-11.27-6.025l1.43 1.43z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.763 6.344l-1.44-1.44-.002.003-2.114-2.114a1 1 0 00-1.414 1.414L5.36 6.775a6.992 6.992 0 00-.344 2.716A6.501 6.501 0 007.5 22h9a6.47 6.47 0 003.229-.857l1.064 1.064a1 1 0 001.414-1.414l-.908-.909.002-.002-1.417-1.416-.002.002L7.762 6.347v-.003zM7 9c0-.188.01-.373.03-.555l11.208 11.207A4.485 4.485 0 0116.5 20h-9a4.5 4.5 0 01-1.134-8.856 1 1 0 00.73-1.163A5.03 5.03 0 017 9z"
      ></path>
    </svg>
  );
};

RecordsOffline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsOffline.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsOffline;
