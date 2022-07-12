import React from 'react';
import PropTypes from 'prop-types';

const PublicLanguage = props => {
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
        d="M12.002 21.75c5.384-.001 9.748-4.366 9.748-9.75 0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12c0 5.383 4.363 9.748 9.746 9.75h.006zM10.087 3.973a8.256 8.256 0 00-6.306 7.31A.749.749 0 014 11.25h3.272c.16-2.719 1.184-5.22 2.815-7.277zM7.272 12.75H4a.749.749 0 01-.22-.033 8.256 8.256 0 006.307 7.31c-1.63-2.057-2.655-4.558-2.815-7.277zM12 19.944c-1.862-1.956-3.042-4.455-3.225-7.194h6.45c-.183 2.739-1.363 5.238-3.225 7.194zM8.775 11.25C8.958 8.512 10.138 6.012 12 4.056c1.862 1.956 3.042 4.456 3.225 7.194h-6.45zm7.953 0c-.16-2.719-1.184-5.22-2.815-7.277a8.256 8.256 0 016.303 7.277h-3.488zm0 1.5c-.16 2.719-1.184 5.22-2.815 7.277a8.256 8.256 0 006.303-7.277h-3.488z"
      ></path>
    </svg>
  );
};

PublicLanguage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PublicLanguage.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PublicLanguage;
