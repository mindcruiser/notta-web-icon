import React from 'react';
import PropTypes from 'prop-types';

const PublicFullScreen = props => {
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
      <path d="M13.636 8.95a1 1 0 101.414 1.414L19 6.414v3.243a1 1 0 102 0V4.01a1.012 1.012 0 00-.045-.307.995.995 0 00-.822-.694A1.006 1.006 0 0019.989 3h-5.646a1 1 0 100 2h3.243l-3.95 3.95z"></path>
      <path d="M5 14.343v3.415l4.121-4.122a1 1 0 111.415 1.414L6.586 19h3.07a1 1 0 010 2H4a1 1 0 01-1-1v-5.657a1 1 0 112 0z"></path>
    </svg>
  );
};

PublicFullScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicFullScreen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicFullScreen;
