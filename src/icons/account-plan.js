import React from 'react';
import PropTypes from 'prop-types';

const AccountPlan = props => {
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
        d="M21.526 2.15a1 1 0 00-.973-.044L15 4.882 9.465 2.115a.996.996 0 00-.93 0l-5.982 2.99A1 1 0 002 6v15a1 1 0 001.447.894L9 19.118l5.548 2.776a1 1 0 00.895 0l6.004-3A1 1 0 0022 18V3a1 1 0 00-.474-.85zM8 4.617l-4 2v12.764l4-2V4.618zm2 12.764l4 2.002V6.618l-4-2v12.764zM20 4.618v12.764l-4 1.998V6.618l4-2z"
      ></path>
    </svg>
  );
};

AccountPlan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccountPlan.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccountPlan;
