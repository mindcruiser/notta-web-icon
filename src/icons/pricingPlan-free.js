import React from 'react';
import PropTypes from 'prop-types';

const PricingPlanFree = props => {
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
        d="M9.207 1.793a1 1 0 00-1.414 1.414L9.586 5H3a1 1 0 00-1 1v4a1 1 0 001 1h1v10a1 1 0 001 1h14a1 1 0 001-1V11h1a1 1 0 001-1V6a1 1 0 00-1-1h-6.586l1.793-1.793a1 1 0 00-1.414-1.414L12 4.586 9.207 1.793zM4 7h7v2H4V7zm15 2h-6V7h7v2h-1zm-6 2h5v9h-5v-9zm-7 0h5v9H6v-9z"
      ></path>
    </svg>
  );
};

PricingPlanFree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PricingPlanFree.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PricingPlanFree;
