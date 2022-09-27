import React from 'react';
import PropTypes from 'prop-types';

const PublicUnable = props => {
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
      <path d="M14.711 7.63l2.304-2.304a1.18 1.18 0 011.67 1.67l-2.247 2.247-7.472 7.471-1.97 1.97a1.18 1.18 0 01-1.67-1.67l1.942-1.94L14.71 7.63z"></path>
      <path d="M7.388 9.057l.664.664a1.18 1.18 0 101.67-1.67l-.665-.663-1.669-1.67-.403-.403a1.18 1.18 0 00-1.67 1.67l.404.403 1.669 1.67z"></path>
      <path d="M16.35 18.02l.665.664a1.18 1.18 0 001.669-1.67l-.664-.663-1.67-1.67-.402-.403a1.18 1.18 0 00-1.67 1.67l.403.403 1.67 1.67z"></path>
    </svg>
  );
};

PublicUnable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicUnable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicUnable;
