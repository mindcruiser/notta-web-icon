import React from 'react';

const AccountPlanColored = ({
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
      <path d="M2.5 5.566a1 1 0 01.486-.857l3.757-2.255a.5.5 0 01.757.43v15.833a.5.5 0 01-.243.429L4.015 21.09a1 1 0 01-1.515-.857V5.566z"></path>
      <path d="M16.5 6.24a.5.5 0 01.188-.39l3.187-2.55a1 1 0 011.625.78v14.44a1 1 0 01-.375.78l-3.813 3.05a.5.5 0 01-.812-.39V6.24z"></path>
      <path d="M9.5 2.883a.5.5 0 01.757-.429l4 2.4a.5.5 0 01.243.43v15.833a.5.5 0 01-.757.429l-4-2.4a.5.5 0 01-.243-.43V2.884z"></path>
    </svg>
  );
};

export default AccountPlanColored;
