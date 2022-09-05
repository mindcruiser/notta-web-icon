import React from 'react';
import PropTypes from 'prop-types';

const PublicExternalLink = props => {
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
        d="M20 7a1 1 0 00-1-1H9.5a7 7 0 00-7 7v1a1 1 0 102 0v-1a5 5 0 015-5H19a1 1 0 001-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.293 3.293a1 1 0 000 1.414L18.586 7l-2.293 2.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 13.5a1 1 0 011 1V17a4 4 0 01-4 4h-14a1 1 0 110-2h14a2 2 0 002-2v-2.5a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

PublicExternalLink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicExternalLink.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicExternalLink;
