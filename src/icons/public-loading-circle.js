import React from 'react';
import PropTypes from 'prop-types';

const PublicLoadingCircle = props => {
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
        d="M12 5a7 7 0 107 7 1 1 0 112 0 9 9 0 11-9-9 1 1 0 110 2z"
      ></path>
    </svg>
  );
};

PublicLoadingCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicLoadingCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicLoadingCircle;
