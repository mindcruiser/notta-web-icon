import React from 'react';
import PropTypes from 'prop-types';

const PublicDuring = props => {
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
        d="M21.282 15.924a.997.997 0 00.322-.215l.005-.004a.997.997 0 00.29-.705m-.617.924A.997.997 0 0120.9 16h-18a1 1 0 110-2h15.586l-4.293-4.293a1 1 0 011.415-1.414l6 6a.997.997 0 01.292.704"
      ></path>
    </svg>
  );
};

PublicDuring.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicDuring.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicDuring;
