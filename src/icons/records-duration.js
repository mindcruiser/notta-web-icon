import React from 'react';
import PropTypes from 'prop-types';

const RecordsDuration = props => {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 7.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 001.414 1.414l3-3z"
      ></path>
    </svg>
  );
};

RecordsDuration.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsDuration.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsDuration;
