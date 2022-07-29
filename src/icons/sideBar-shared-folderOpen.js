import React from 'react';
import PropTypes from 'prop-types';

const SideBarSharedFolderOpen = props => {
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
        d="M21.099 8.118v.892a2 2 0 011.77 2.348l-1.637 9A2 2 0 0119.264 22H4.584a2.992 2.992 0 01-2.575-1.46 3.984 3.984 0 01-.91-2.54V6a4 4 0 014-4h3.267a3 3 0 011.939.71l1.1.934a2 2 0 001.294.474h4.4a4 4 0 014 4zM3.099 6a2 2 0 012-2h3.267a1 1 0 01.646.237l1.101.933a4 4 0 002.586.948h4.4a2 2 0 012 2V9H5.31a2 2 0 00-1.954 1.573L3.1 11.749V6zm9.445 7.293c-.092.927-.923 1.679-1.855 1.679-.932 0-1.612-.752-1.52-1.68.092-.927.922-1.679 1.854-1.679s1.613.752 1.521 1.68zM7.626 17.49c.093-.928.923-1.68 1.855-1.68h2.25c.932 0 1.613.752 1.52 1.68l-.11 1.119a.634.634 0 01-.62.56h-4.5a.499.499 0 01-.506-.56l.111-1.12zm8.237-3.639a1.585 1.585 0 01-1.545 1.4 1.248 1.248 0 01-1.267-1.4c.077-.773.769-1.4 1.545-1.4.777 0 1.344.627 1.267 1.4zm.062 5.038h-2.286c.032-.09.054-.183.064-.28l.11-1.12a2.051 2.051 0 00-.353-1.399h2.18a.998.998 0 011.014 1.12l-.111 1.12a.634.634 0 01-.618.559z"
      ></path>
    </svg>
  );
};

SideBarSharedFolderOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SideBarSharedFolderOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SideBarSharedFolderOpen;
