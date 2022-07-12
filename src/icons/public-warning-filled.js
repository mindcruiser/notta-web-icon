import React from 'react';
import PropTypes from 'prop-types';

const PublicWarningFilled = props => {
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.25 14.25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM12 13.998a1 1 0 01-1-1V6.5a1 1 0 112 0v6.498a1 1 0 01-1 1z"
      ></path>
    </svg>
  );
};

PublicWarningFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicWarningFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicWarningFilled;
