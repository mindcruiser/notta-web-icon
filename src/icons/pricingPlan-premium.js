import React from 'react';
import PropTypes from 'prop-types';

const PricingPlanPremium = props => {
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
        d="M5.132 3.504A1 1 0 016 3h12a1 1 0 01.868.504l4 7a1 1 0 01-.16 1.203l-10 10a1 1 0 01-1.415 0l-10-10a1 1 0 01-.161-1.203l4-7zm.559 3.053L3.723 10h2.951l-.983-3.443zM7.323 12H4.414l4.848 4.848L7.323 12zm7.415 4.848L19.586 12h-2.909l-1.94 4.848zM17.326 10h2.95L18.31 6.557 17.326 10zm-.652-5h-2.95l1.967 3.443L16.674 5zm-2.397 5L12 6.016 9.723 10h4.554zm-4.8 2h5.046L12 18.307 9.477 12zM8.309 8.443L10.277 5H7.326l.983 3.443z"
      ></path>
    </svg>
  );
};

PricingPlanPremium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PricingPlanPremium.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PricingPlanPremium;
