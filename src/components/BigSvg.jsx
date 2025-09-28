import React from 'react';

const BigSvg = ({ className, gradientId = 'gggyrate-grad', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 800 800"
    opacity="1"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={gradientId}>
        <stop stopColor="var(--color-accent-700)" stopOpacity="1" offset="0%" />
        <stop stopColor="var(--color-primary-500)" stopOpacity="1" offset="100%" />
      </linearGradient>
    </defs>
    <g strokeWidth="5.5" stroke={`url(#${gradientId})`} fill="none">
      <polygon points="400,122.125 29.5,677.875 770.5,677.875" opacity="1.00" />
      <polygon points="400,136.75 49,663.25 751,663.25" opacity="0.95" />
      <polygon points="400,151.375 68.5,648.625 731.5,648.625" opacity="0.89" />
      <polygon points="400,166 88,634 712,634" opacity="0.84" />
      <polygon points="400,180.625 107.5,619.375 692.5,619.375" opacity="0.79" />
      <polygon points="400,195.25 127,604.75 673,604.75" opacity="0.74" />
      <polygon points="400,209.875 146.5,590.125 653.5,590.125" opacity="0.68" />
      <polygon points="400,224.5 166,575.5 634,575.5" opacity="0.63" />
      <polygon points="400,239.125 185.5,560.875 614.5,560.875" opacity="0.58" />
      <polygon points="400,253.75 205,546.25 595,546.25" opacity="0.53" />
      <polygon points="400,268.375 224.5,531.625 575.5,531.625" opacity="0.47" />
      <polygon points="400,283 244,517 556,517" opacity="0.42" />
      <polygon points="400,297.625 263.5,502.375 536.5,502.375" opacity="0.37" />
      <polygon points="400,312.25 283,487.75 517,487.75" opacity="0.31" />
      <polygon points="400,326.875 302.5,473.125 497.5,473.125" opacity="0.26" />
      <polygon points="400,341.5 322,458.5 478,458.5" opacity="0.21" />
      <polygon points="400,356.125 341.5,443.875 458.5,443.875" opacity="0.16" />
      <polygon points="400,370.75 361,429.25 439,429.25" opacity="0.10" />
      <polygon points="400,385.375 380.5,414.625 419.5,414.625" opacity="0.05" />
    </g>
  </svg>
);

export default BigSvg;
