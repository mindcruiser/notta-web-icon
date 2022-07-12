import React from 'react';
import PropTypes from 'prop-types';

const PublicCheckboxChecked = props => {
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
        d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.207 3.707a1 1 0 00-1.414-1.414L11 13.086l-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5.5-5.5z"
      ></path>
    </svg>
  );
};

PublicCheckboxChecked.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicCheckboxChecked.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicCheckboxChecked;
