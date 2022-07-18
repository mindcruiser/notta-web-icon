import React from 'react';
import PropTypes from 'prop-types';

const PublicCheckboxUncheckedHovered = props => {
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
        d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12.207 3.707a1 1 0 00-1.414-1.414L11 13.086l-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5.5-5.5z"
      ></path>
    </svg>
  );
};

PublicCheckboxUncheckedHovered.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicCheckboxUncheckedHovered.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicCheckboxUncheckedHovered;
