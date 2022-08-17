import React from 'react';
import PropTypes from 'prop-types';

const PublicCollaboration = props => {
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
      <path d="M12 6.906a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
      <path d="M2 16.281a3.75 3.75 0 013.75-3.75h5a3.75 3.75 0 013.75 3.75v2.5c0 .69-.56 1.25-1.25 1.25h-10c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
      <path d="M19.5 8.156a3.125 3.125 0 11-6.25 0 3.125 3.125 0 016.25 0z"></path>
      <path d="M20.75 19.406h-5.079a2.5 2.5 0 00.079-.625v-2.5c0-1.182-.41-2.269-1.097-3.125H19.5a2.5 2.5 0 012.5 2.5v2.5c0 .69-.56 1.25-1.25 1.25z"></path>
    </svg>
  );
};

PublicCollaboration.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicCollaboration.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicCollaboration;
