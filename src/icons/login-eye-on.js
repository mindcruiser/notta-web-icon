import React from 'react';
import PropTypes from 'prop-types';

const LoginEyeOn = props => {
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
        d="M1.853 12a18.925 18.925 0 002.57 3.487C6.233 17.42 8.8 19.25 12 19.25s5.766-1.83 7.578-3.763A18.925 18.925 0 0022.148 12a18.924 18.924 0 00-2.57-3.487C17.766 6.58 15.2 4.75 12 4.75S6.234 6.58 4.422 8.513A18.924 18.924 0 001.852 12zM23 12l.67.336v.003l-.004.006-.01.02-.04.076a18.215 18.215 0 01-.72 1.216 20.43 20.43 0 01-2.224 2.856C18.734 18.58 15.8 20.75 12 20.75c-3.8 0-6.734-2.17-8.672-4.237a20.426 20.426 0 01-2.796-3.802 11.845 11.845 0 01-.187-.345l-.011-.021-.003-.006-.001-.002v-.001L1 12a82.64 82.64 0 01-.67-.336v-.003l.004-.006.01-.02.04-.076a18.235 18.235 0 01.72-1.216 20.425 20.425 0 012.224-2.856C5.266 5.42 8.2 3.25 12 3.25c3.8 0 6.734 2.17 8.672 4.237a20.43 20.43 0 012.796 3.802 11.896 11.896 0 01.187.345l.011.021.003.006.001.002v.001L23 12zm0 0l.67.335a.75.75 0 000-.67L23 12zM1 12l-.67.335a.75.75 0 010-.67L1 12zm11-2.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM8.25 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z"
      ></path>
    </svg>
  );
};

LoginEyeOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LoginEyeOn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LoginEyeOn;
