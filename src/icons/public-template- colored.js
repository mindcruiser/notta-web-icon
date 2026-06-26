import React from 'react';

const PublicTemplateColored = ({
  color = 'currentColor',
  size = '16',
  ...otherProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <circle cx="7.5" cy="13.275" r="6"></circle>
      <path d="M10.847 3.612a1.5 1.5 0 011.837-1.06l7.727 2.07a1.5 1.5 0 011.06 1.837l-2.07 7.727a1.5 1.5 0 01-1.837 1.06l-7.727-2.07a1.5 1.5 0 01-1.06-1.836l2.07-7.728z"></path>
      <path d="M14.952 13.356a1.3 1.3 0 012.096 0l4.482 6.1c.63.858.017 2.07-1.048 2.07h-8.963c-1.066 0-1.679-1.212-1.048-2.07l4.481-6.1z"></path>
    </svg>
  );
};

export default PublicTemplateColored;
