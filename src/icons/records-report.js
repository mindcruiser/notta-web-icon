import React from 'react';
import PropTypes from 'prop-types';

const RecordsReport = props => {
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
        d="M11.993 2c.586 0 1.22.078 1.754.266l.008.003 4.641 1.683c.76.275 1.4.823 1.847 1.448.445.624.757 1.405.757 2.21V14.3c0 .736-.244 1.51-.586 2.168-.343.66-.837 1.304-1.437 1.738l-3.998 2.888-.001.001c-.859.624-1.943.906-2.978.906-1.035 0-2.12-.282-2.978-.906l-3.998-2.888c-.6-.434-1.095-1.08-1.438-1.74C3.244 15.81 3 15.037 3 14.3V7.61c0-.806.312-1.587.757-2.211.447-.625 1.087-1.173 1.846-1.448l4.643-1.683C10.775 2.078 11.408 2 11.993 2zm-1.067 2.15l-4.64 1.683c-.31.112-.644.37-.902.73C5.126 6.925 5 7.31 5 7.611v6.688c0 .325.119.78.36 1.245.241.463.551.835.835 1.04l4.003 2.892C10.65 19.806 11.3 20 12 20c.7 0 1.35-.195 1.802-.524l.003-.002 4-2.89c.283-.204.594-.577.835-1.04.241-.465.36-.92.36-1.245V7.61c0-.302-.126-.686-.384-1.048-.258-.36-.59-.618-.9-.73L13.078 4.15c-.258-.09-.65-.151-1.085-.151-.438 0-.824.062-1.067.15zM12 7a1 1 0 011 1v5a1 1 0 11-2 0V8a1 1 0 011-1zm0 10a1 1 0 100-2 1 1 0 000 2z"
      ></path>
    </svg>
  );
};

RecordsReport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RecordsReport.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RecordsReport;
