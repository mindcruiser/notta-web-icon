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
      <path d="M4 6a2 2 0 012-2h3a1 1 0 000-2H6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-3.5a1 1 0 10-2 0V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"></path>
      <path d="M14 2a1 1 0 100 2h4c.18 0 .353.024.518.068l-6.325 6.325a1 1 0 001.414 1.414l6.325-6.325c.044.165.068.339.068.518v4a1 1 0 102 0V6a4 4 0 00-4-4h-4z"></path>
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
