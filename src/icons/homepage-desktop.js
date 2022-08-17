import React from 'react';
import PropTypes from 'prop-types';

const HomepageDesktop = props => {
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
        d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zM5 6a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V6z"
      ></path>
      <path d="M2 19a1 1 0 100 2h20a1 1 0 100-2H2z"></path>
    </svg>
  );
};

HomepageDesktop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HomepageDesktop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HomepageDesktop;
