import React from 'react';
import PropTypes from 'prop-types';

const PublicStore = props => {
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
      <path d="M8 16a1 1 0 100 2h8a1 1 0 100-2H8z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3a1 1 0 011-1h8a1 1 0 011 1v3.5h4a1 1 0 01.997 1.074l-1 13.5A1 1 0 0120 22H4a1 1 0 01-.997-.926l-1-13.5A1 1 0 013 6.5h4V3zm8 6.5v-1H9v1a1 1 0 11-2 0v-1H4.077L4.929 20H19.07l.852-11.5H17v1a1 1 0 11-2 0zM15 4v2.5H9V4h6z"
      ></path>
    </svg>
  );
};

PublicStore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicStore.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicStore;
