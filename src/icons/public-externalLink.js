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
        d="M4.5 4a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-4.763a1 1 0 012 0V19.5a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 19.5v-15A2.5 2.5 0 014.5 2H9a1 1 0 010 2H4.5zM13 3a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 11-2 0V5.414l-6.393 6.393a1 1 0 01-1.414-1.414L18.586 4H14a1 1 0 01-1-1z"
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
