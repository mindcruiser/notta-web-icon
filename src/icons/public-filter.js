import React from 'react';
import PropTypes from 'prop-types';

const PublicFilter = props => {
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
        d="M2.092 4.082A1 1 0 013 3.5h18a1 1 0 01.76 1.65l-6.96 8.128V21a1 1 0 01-1.443.897l-3.6-1.778a1 1 0 01-.557-.897v-5.944L2.24 5.15a1 1 0 01-.148-1.068zM5.172 5.5l5.788 6.758a1 1 0 01.24.65v5.693l1.6.79v-6.482a1 1 0 01.24-.65L18.827 5.5H5.173z"
      ></path>
    </svg>
  );
};

PublicFilter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicFilter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicFilter;
