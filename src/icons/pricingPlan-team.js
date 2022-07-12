import React from 'react';
import PropTypes from 'prop-types';

const PricingPlanTeam = props => {
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
        d="M10 7a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8zm-2 9a5 5 0 00-5 5v3a1 1 0 001 1h12a1 1 0 001-1v-3a5 5 0 00-5-5h-4zm-3 5a3 3 0 013-3h4a3 3 0 013 3v2H7v-2zm9.903-6.541c.107-.152.207-.308.3-.47a2 2 0 00.75-3.748 5.96 5.96 0 00-.753-2.236 4 4 0 011.562 7.587 6.501 6.501 0 00-1.859-1.133zm-9.806 0a6.5 6.5 0 00-1.859 1.133A4 4 0 016.8 4.005a5.96 5.96 0 00-.752 2.236 2 2 0 00.749 3.749c.093.161.193.317.3.469zM4 13h.022a6.461 6.461 0 00-.892 2.198A2 2 0 002 17v2h1v1c0 .35.06.687.17 1H1a1 1 0 01-1-1v-3a4 4 0 014-4zm19 8h-2.17c.11-.313.17-.65.17-1v-1h1v-2a2 2 0 00-1.13-1.802A6.46 6.46 0 0019.978 13H20a4 4 0 014 4v3a1 1 0 01-1 1z"
      ></path>
    </svg>
  );
};

PricingPlanTeam.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PricingPlanTeam.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PricingPlanTeam;
