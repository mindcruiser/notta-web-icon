import React from 'react';
import PropTypes from 'prop-types';

const PublicDanger = props => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm3.89-13.889a1 1 0 010 1.414L13.413 12l2.475 2.475a1 1 0 01-1.414 1.414L12 13.414 9.525 15.89a1 1 0 01-1.414-1.414L10.586 12 8.11 9.525a1 1 0 111.414-1.414L12 10.586l2.475-2.475a1 1 0 011.414 0z"
      ></path>
    </svg>
  );
};

PublicDanger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicDanger.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicDanger;
