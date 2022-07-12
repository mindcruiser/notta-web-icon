import React from 'react';
import PropTypes from 'prop-types';

const PublicAppStore = props => {
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
      <path d="M12.12 7.46c-.749 0-1.908-.854-3.129-.823-1.61.02-3.088.935-3.919 2.385-1.672 2.91-.43 7.207 1.2 9.571.8 1.152 1.745 2.447 2.996 2.406 1.2-.051 1.652-.781 3.109-.781 1.446 0 1.857.781 3.129.75 1.293-.02 2.113-1.172 2.903-2.334a10.342 10.342 0 001.314-2.703c-.031-.01-2.514-.967-2.545-3.845-.02-2.406 1.96-3.558 2.052-3.609-1.128-1.655-2.862-1.84-3.468-1.881-1.58-.124-2.903.863-3.642.863zm2.668-2.427c.667-.802 1.108-1.923.985-3.033-.954.041-2.104.637-2.79 1.44-.617.709-1.15 1.85-1.006 2.94 1.056.082 2.144-.545 2.81-1.347z"></path>
    </svg>
  );
};

PublicAppStore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicAppStore.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicAppStore;
