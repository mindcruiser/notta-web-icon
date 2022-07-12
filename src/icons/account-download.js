import React from 'react';
import PropTypes from 'prop-types';

const AccountDownload = props => {
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
        d="M12.996 3a1 1 0 10-2 0v10.582l-2.789-2.79a1 1 0 00-1.414 1.415l4.443 4.444c.184.213.456.349.76.349h.002a.997.997 0 00.71-.293l4.5-4.5a1 1 0 00-1.415-1.414l-2.797 2.797V3zM21 11a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-8.996a1 1 0 112 0V20h16v-8a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

AccountDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountDownload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountDownload;
