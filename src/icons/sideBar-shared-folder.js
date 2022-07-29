import React from 'react';
import PropTypes from 'prop-types';

const SideBarSharedFolder = props => {
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
      <path d="M12 10.392a1.687 1.687 0 11-3.375 0 1.687 1.687 0 013.375 0z"></path>
      <path d="M7.5 14.611c0-.932.756-1.687 1.688-1.687h2.25c.931 0 1.687.755 1.687 1.687v1.125c0 .31-.252.563-.563.563h-4.5a.563.563 0 01-.562-.563v-1.125z"></path>
      <path d="M15.375 10.955a1.406 1.406 0 11-2.813 0 1.406 1.406 0 012.813 0z"></path>
      <path d="M15.938 16.017h-2.286c.023-.09.036-.184.036-.28V14.61a2.24 2.24 0 00-.494-1.406h2.181c.621 0 1.125.504 1.125 1.125v1.125c0 .31-.252.562-.563.562z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2.5a4 4 0 00-4 4v11a4 4 0 004 4h12a4 4 0 004-4v-9a4 4 0 00-4-4h-4.448a2 2 0 01-1.249-.438l-1.13-.905A3 3 0 009.297 2.5H6zm-2 4a2 2 0 012-2h3.298a1 1 0 01.625.22l1.13.903a4 4 0 002.5.877H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-11z"
      ></path>
    </svg>
  );
};

SideBarSharedFolder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SideBarSharedFolder.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SideBarSharedFolder;
