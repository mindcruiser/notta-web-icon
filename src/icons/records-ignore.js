import React from 'react';
import PropTypes from 'prop-types';

const RecordsIgnore = props => {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.793 7.793a1 1 0 000 1.414L10.586 12l-2.793 2.793a1 1 0 101.414 1.414L12 13.414l2.793 2.793a1 1 0 001.414-1.414L13.414 12l2.793-2.793a1 1 0 00-1.414-1.414L12 10.586 9.207 7.793a1 1 0 00-1.414 0z"
      ></path>
    </svg>
  );
};

RecordsIgnore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsIgnore.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsIgnore;
