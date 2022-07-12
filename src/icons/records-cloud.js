import React from 'react';
import PropTypes from 'prop-types';

const RecordsCloud = props => {
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
      <path d="M15.707 12.707a1 1 0 00-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a7 7 0 00-6.992 6.67A7 7 0 008 22h8.5a6.5 6.5 0 002.483-12.509A7 7 0 0012 2zM7 9a5 5 0 119.904.98 1 1 0 00.73 1.164A4.5 4.5 0 0116.5 20H8a5 5 0 01-1.659-9.719 1 1 0 00.667-.998A5.097 5.097 0 017 9z"
      ></path>
    </svg>
  );
};

RecordsCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsCloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsCloud;
