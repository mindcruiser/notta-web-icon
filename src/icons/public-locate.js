import React from 'react';
import PropTypes from 'prop-types';

const PublicLocate = props => {
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
        d="M16 10.5a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.5c-4.445 0-8 3.698-8 8.2 0 5.317 3.892 8.096 7.28 10.515l.139.099a1 1 0 001.162 0l.138-.099C16.108 18.795 20 16.017 20 10.7c0-4.502-3.555-8.2-8-8.2zm-6 8.2c0-3.45 2.713-6.2 6-6.2s6 2.75 6 6.2c0 3.98-2.682 6.18-6 8.57-3.318-2.39-6-4.59-6-8.57z"
      ></path>
    </svg>
  );
};

PublicLocate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicLocate.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicLocate;
