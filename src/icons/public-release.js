import React from 'react';
import PropTypes from 'prop-types';

const PublicRelease = props => {
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
      <path d="M6.343 12A4 4 0 0012 17.657l.707-.707a1 1 0 011.414 1.414l-.707.707a6 6 0 11-8.485-8.485l.707-.707a1 1 0 011.414 1.414L6.343 12z"></path>
      <path d="M12 6.343A4 4 0 1117.657 12l-.707.707a1 1 0 001.414 1.414l.707-.707a6 6 0 10-8.485-8.485l-.707.707a1 1 0 101.414 1.414L12 6.343z"></path>
      <path d="M8.464 14.121a1 1 0 101.415 1.415l5.656-5.657a1 1 0 00-1.414-1.415l-5.657 5.657z"></path>
    </svg>
  );
};

PublicRelease.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicRelease.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicRelease;
