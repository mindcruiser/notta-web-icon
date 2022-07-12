import React from 'react';
import PropTypes from 'prop-types';

const PublicNewFeatures = props => {
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
        d="M4 4a1 1 0 000 2h1a1 1 0 000-2H4zm5 0a1 1 0 000 2h11a1 1 0 100-2H9zm-1 8a1 1 0 011-1h11a1 1 0 110 2H9a1 1 0 01-1-1zm-4-1a1 1 0 100 2h1a1 1 0 100-2H4zm4 8a1 1 0 011-1h11a1 1 0 110 2H9a1 1 0 01-1-1zm-4-1a1 1 0 100 2h1a1 1 0 100-2H4z"
      ></path>
    </svg>
  );
};

PublicNewFeatures.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicNewFeatures.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicNewFeatures;
