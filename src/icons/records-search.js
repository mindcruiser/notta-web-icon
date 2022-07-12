import React from 'react';
import PropTypes from 'prop-types';

const RecordsSearch = props => {
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
        d="M4 11a7 7 0 1114 0 7 7 0 01-14 0zm7-9a9 9 0 100 18 9 9 0 000-18zm8.707 16.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414-1.414l-2-2z"
      ></path>
    </svg>
  );
};

RecordsSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsSearch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsSearch;
