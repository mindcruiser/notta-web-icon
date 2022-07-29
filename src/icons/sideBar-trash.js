import React from 'react';
import PropTypes from 'prop-types';

const SideBarTrash = props => {
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
        d="M16.817 5.29l-.184-.555A4 4 0 0012.838 2h-1.676a4 4 0 00-3.794 2.735l-.186.555c-.597.07-1.151.146-1.65.221a42.757 42.757 0 00-2.561.47l-.149.034-.04.009-.011.003h-.005a1 1 0 00.468 1.945h.001l.007-.002.032-.007.13-.03a40.748 40.748 0 012.428-.445C7.444 7.245 9.642 7 12 7c2.359 0 4.556.244 6.168.489a40.752 40.752 0 012.427.444l.131.03.032.007.007.002a1 1 0 00.47-1.944l-.006-.001-.011-.003-.04-.01-.149-.033a42.757 42.757 0 00-2.56-.47 46.96 46.96 0 00-1.651-.22zm4.417.738l-.028.118-.199.824.227-.942zM3 7l-.234-.972L3 7zm6.382-1.91C10.216 5.033 11.096 5 12 5c.904 0 1.784.034 2.618.09A2 2 0 0012.838 4h-1.676a2 2 0 00-1.78 1.09zM4.917 8.003a1 1 0 011.08.913l.847 10.166A1 1 0 007.84 20h8.32a1 1 0 00.996-.917l.847-10.166a1 1 0 011.994.166l-.848 10.166A3 3 0 0116.16 22H7.84a3 3 0 01-2.99-2.75L4.004 9.082a1 1 0 01.914-1.08zM14.5 16a1 1 0 01-1 1h-3a1 1 0 110-2h3a1 1 0 011 1zm0-3a1 1 0 100-2h-5a1 1 0 100 2h5z"
      ></path>
    </svg>
  );
};

SideBarTrash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SideBarTrash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SideBarTrash;
