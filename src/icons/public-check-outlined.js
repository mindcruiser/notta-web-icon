import React from 'react';
import PropTypes from 'prop-types';

const PublicCheckOutlined = props => {
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
        d="M21.65 4.24a1 1 0 01.11 1.41l-12 14a1 1 0 01-1.467.057l-6-6a1 1 0 111.414-1.414l5.237 5.236L20.24 4.35a1 1 0 011.41-.108z"
      ></path>
    </svg>
  );
};

PublicCheckOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicCheckOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicCheckOutlined;
