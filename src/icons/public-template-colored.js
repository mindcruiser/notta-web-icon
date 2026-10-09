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
      <use xlinkHref="#stroke0_4435_118"></use>
      <mask
        id="a"
        maskUnits="userSpaceOnUse"
        x="1"
        y="6.775"
        width="13"
        height="13"
      >
        <rect x="1" y="6.775" width="13" height="13"></rect>
        <use xlinkHref="#stroke0_4435_118"></use>
      </mask>
      <path
        d="M13 13.275a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
        mask="url(#a)"
      ></path>
      <use xlinkHref="#stroke2_4435_118"></use>
      <mask
        id="b"
        maskUnits="userSpaceOnUse"
        x="7.224"
        y="1"
        width="15"
        height="15"
      >
        <rect x="7.224" y="1" width="15" height="15"></rect>
        <use xlinkHref="#stroke2_4435_118"></use>
      </mask>
      <path
        d="M9.966 12.693l7.727 2.07a1 1 0 001.225-.706l2.07-7.728a1 1 0 00-.706-1.224l-7.728-2.07a1 1 0 00-1.225.706L9.26 11.47a1 1 0 00.707 1.224z"
        mask="url(#b)"
      ></path>
      <use xlinkHref="#stroke4_4435_118"></use>
      <mask
        id="c"
        maskUnits="userSpaceOnUse"
        x="7"
        y="12.326"
        width="14"
        height="10"
      >
        <rect x="7" y="12.326" width="14" height="10"></rect>
        <use xlinkHref="#stroke4_4435_118"></use>
      </mask>
      <path
        d="M9.801 21.025h8.964a.8.8 0 00.644-1.274l-4.481-6.099a.8.8 0 00-1.29 0l-4.481 6.1a.8.8 0 00.644 1.273z"
        mask="url(#c)"
      ></path>
      <defs>
        <path
          id="stroke0_4435_118"
          d="M13 13.275a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
        ></path>
        <path
          id="stroke2_4435_118"
          d="M11.33 3.741a1 1 0 011.224-.707l7.728 2.07a1 1 0 01.707 1.225l-2.07 7.728a1 1 0 01-1.226.707l-7.727-2.07a1 1 0 01-.707-1.225l2.07-7.728z"
        ></path>
        <path
          id="stroke4_4435_118"
          d="M13.638 13.652a.8.8 0 011.29 0l4.481 6.1a.8.8 0 01-.644 1.273H9.8a.8.8 0 01-.644-1.274l4.481-6.099z"
        ></path>
      </defs>
    </svg>
  );
};

export default PublicTemplateColored;
