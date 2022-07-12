import React from 'react';
import PropTypes from 'prop-types';

const RecordsMove = props => {
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
        d="M7 4a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V9.5h-2.5a3 3 0 01-3-3V4H7zm7.5-2H7a4 4 0 00-4 4v12a4 4 0 004 4h10a4 4 0 004-4V7.5a1 1 0 00-.253-.664l-4-4.5A1 1 0 0016 2h-1.5zm1 2v2.5a1 1 0 001 1h2.162L15.551 4H15.5zm-3.207 7.293a1 1 0 011.414 0l3 3A1 1 0 0116 16H8a1 1 0 110-2h5.586l-1.293-1.293a1 1 0 010-1.414z"
      ></path>
    </svg>
  );
};

RecordsMove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsMove.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsMove;
