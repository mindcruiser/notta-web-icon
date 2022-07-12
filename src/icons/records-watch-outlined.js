import React from 'react';
import PropTypes from 'prop-types';

const RecordsWatchOutlined = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 8.5a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.793 11.793a1 1 0 011.414 0l1.75 1.75a1 1 0 01-1.414 1.414l-1.75-1.75a1 1 0 010-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 21a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 8a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8zm3-1a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8a1 1 0 00-1-1H8z"
      ></path>
    </svg>
  );
};

RecordsWatchOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsWatchOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsWatchOutlined;
