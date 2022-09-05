import React from 'react';
import PropTypes from 'prop-types';

const PublicUpgrade = props => {
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
      <path d="M4.806 2.476c.234-.635 1.132-.635 1.367 0l.677 1.829a.73.73 0 00.43.43l1.83.677c.634.235.634 1.133 0 1.368l-1.83.676a.73.73 0 00-.43.431l-.677 1.829c-.235.635-1.133.635-1.367 0l-.677-1.829a.729.729 0 00-.43-.43l-1.83-.677c-.634-.235-.634-1.133 0-1.368l1.829-.676a.729.729 0 00.43-.431l.678-1.829z"></path>
      <path d="M13.746 6.583c.294-.793 1.416-.793 1.71 0l1.625 4.393c.092.249.289.446.538.538l4.393 1.625c.793.294.793 1.416 0 1.71l-4.393 1.625a.911.911 0 00-.538.538l-1.625 4.393c-.294.793-1.416.793-1.71 0l-1.625-4.393a.911.911 0 00-.538-.538L7.19 14.848c-.793-.293-.793-1.415 0-1.709l4.393-1.625a.911.911 0 00.538-.538l1.625-4.393z"></path>
    </svg>
  );
};

PublicUpgrade.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicUpgrade.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicUpgrade;
