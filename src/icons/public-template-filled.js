import React from 'react';

const PublicTemplateFilled = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3a1 1 0 00-1 1v8a1 1 0 001 1h5.158a.21.21 0 00.2-.151c.123-.42.535-1.626 1.381-2.515a3.534 3.534 0 011.865-1.045c.217-.043.396-.227.396-.448V4a1 1 0 00-1-1H9zm3.782 10.99c.117 0 .21.1.194.217a5.512 5.512 0 11-6.184-6.183.194.194 0 01.218.194v4.772a1 1 0 001 1h4.772zm4.047-2.609c.333-.508 1.01-.508 1.342 0l4.666 7.13c.404.618.011 1.489-.671 1.489h-9.332c-.682 0-1.075-.871-.67-1.489l4.665-7.13z"
      ></path>
    </svg>
  );
};

export default PublicTemplateFilled;
