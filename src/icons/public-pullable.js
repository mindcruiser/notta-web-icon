import React from 'react';
import PropTypes from 'prop-types';

const PublicPullable = props => {
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
        d="M19.85 6.414L18.434 5 5 18.435l1.414 1.414L19.85 6.414zm0 7.072l-1.415-1.415-6.364 6.364 1.414 1.415 6.364-6.365z"
      ></path>
    </svg>
  );
};

PublicPullable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicPullable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicPullable;
