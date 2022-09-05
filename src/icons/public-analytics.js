import React from 'react';
import PropTypes from 'prop-types';

const PublicAnalytics = props => {
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
        d="M12 2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1c0-5.523-4.477-10-10-10zm1 9V4.062A8.004 8.004 0 0119.938 11H13zM8.94 4.606a1 1 0 00-.766-1.847A10.003 10.003 0 002 12c0 5.523 4.477 10 10 10 4.17 0 7.74-2.551 9.241-6.174a1 1 0 10-1.847-.765A8.003 8.003 0 014 12a8.003 8.003 0 014.94-7.395z"
      ></path>
    </svg>
  );
};

PublicAnalytics.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicAnalytics.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicAnalytics;
