import React from 'react';
import PropTypes from 'prop-types';

const RecordsLanguage = props => {
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
        d="M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm4-2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6zm6 2.5a1 1 0 01.914.594l4 9a1 1 0 11-1.828.812L14.24 15H9.761l-.847 1.906a1 1 0 01-1.828-.812l4-9A1 1 0 0112 6.5zM10.65 13h2.7L12 9.962 10.65 13z"
      ></path>
    </svg>
  );
};

RecordsLanguage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsLanguage.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsLanguage;
