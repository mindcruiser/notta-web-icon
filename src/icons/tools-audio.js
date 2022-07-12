import React from 'react';
import PropTypes from 'prop-types';

const ToolsAudio = props => {
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
      <path d="M17.244 3.013l-5.18 1.04c-.737.148-1.264.759-1.264 1.466v8.516c0 1.462-4.8.24-4.8 4.325 0 .75.482 2.64 2.773 2.64 2.816 0 3.627-2.006 3.627-4.234V7.904l4.864-1c.43-.09.736-.446.736-.86V3.586c0-.373-.367-.651-.756-.573z"></path>
    </svg>
  );
};

ToolsAudio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ToolsAudio.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ToolsAudio;
