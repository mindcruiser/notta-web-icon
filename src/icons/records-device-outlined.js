import React from 'react';
import PropTypes from 'prop-types';

const RecordsDeviceOutlined = props => {
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
        d="M8.5 8a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V8zm5 0h-3v3h3V8z"
      ></path>
      <path d="M9.5 16a1 1 0 100 2h5a1 1 0 100-2h-5z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 5a3 3 0 013-3h11a3 3 0 013 3v14a3 3 0 01-3 3h-11a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v14a1 1 0 001 1h11a1 1 0 001-1V5a1 1 0 00-1-1h-11z"
      ></path>
    </svg>
  );
};

RecordsDeviceOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsDeviceOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsDeviceOutlined;
