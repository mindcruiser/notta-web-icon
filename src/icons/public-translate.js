import React from 'react';
import PropTypes from 'prop-types';

const PublicTranslate = props => {
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
      <path d="M8 2a1 1 0 011 1v.5h3a1 1 0 110 2h-1.134c.148.256.18.575.063.871-.428 1.07-1.094 2.199-1.9 3.24.438.32.941.667 1.526 1.057a1 1 0 11-1.11 1.664 45.913 45.913 0 01-1.744-1.214c-.994.988-2.137 1.834-3.33 2.31a1 1 0 11-.742-1.857c.822-.329 1.688-.936 2.505-1.717a11.608 11.608 0 01-1.966-2.3 1 1 0 011.664-1.109c.458.687.91 1.26 1.635 1.918.696-.905 1.257-1.865 1.605-2.734.018-.045.038-.088.062-.129H4a1 1 0 010-2h3V3a1 1 0 011-1z"></path>
      <path d="M15 4a1 1 0 011-1h2a3 3 0 013 3v2a1 1 0 11-2 0V6a1 1 0 00-1-1h-2a1 1 0 01-1-1z"></path>
      <path d="M4 15a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 110 2H6a3 3 0 01-3-3v-2a1 1 0 011-1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10a1 1 0 01.914.594l4 9a1 1 0 11-1.828.812L18.24 18.5h-4.478l-.847 1.906a1 1 0 11-1.828-.812l4-9A1 1 0 0116 10zm-1.35 6.5h2.7L16 13.462 14.65 16.5z"
      ></path>
    </svg>
  );
};

PublicTranslate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicTranslate.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicTranslate;
