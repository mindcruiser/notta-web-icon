import React from 'react';
import PropTypes from 'prop-types';

const PublicWarningOutlined = props => {
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
        d="M12 20a8 8 0 100-16 8 8 0 000 16zm10-8c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-11.25 4.25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm.25-3.252a1 1 0 102 0V6.5a1 1 0 10-2 0v6.498z"
      ></path>
    </svg>
  );
};

PublicWarningOutlined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicWarningOutlined.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicWarningOutlined;
