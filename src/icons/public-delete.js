import React from 'react';
import PropTypes from 'prop-types';

const PublicDelete = props => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 11a1 1 0 100 2h8a1 1 0 100-2H8z"
      ></path>
    </svg>
  );
};

PublicDelete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicDelete.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicDelete;
