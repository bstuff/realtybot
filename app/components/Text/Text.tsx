import { FC, PropsWithChildren } from 'react';

interface ColorProp {
  color?: 'black' | 'gray' | 'purple';
  className?: string;
}

// force load styles for all colors
<legend className="text-black text-gray text-purple" />;

/**
 * text-xl font-semibold leading-6
 */
export const Heading: FC<PropsWithChildren & ColorProp> = ({ children, color = 'black', className }) => (
  <span className={`text-xl font-semibold leading-6 text-${color} ${className}`}>{children}</span>
);

/**
 * text-sm leading-5
 */
export const Description: FC<PropsWithChildren & ColorProp> = ({ children, color = 'gray', className }) => (
  <span className={`text-sm leading-5 text-${color} ${className}`}>{children}</span>
);

/**
 * text-[16px] leading-5
 */
export const Base: FC<PropsWithChildren & ColorProp> = ({ children, color = 'black', className }) => (
  <span className={`text-base leading-5 text-${color} ${className}`}>{children}</span>
);

/**
 * text-[11px] leading-[14px]
 */
export const Xs: FC<PropsWithChildren & ColorProp> = ({ children, color = 'black', className }) => (
  <span className={`text-xs leading-[14px] text-${color} ${className}`}>{children}</span>
);

/**
 * text-[14px] leading-[18px]
 */
export const Sm: FC<PropsWithChildren & ColorProp> = ({ children, color = 'black', className }) => (
  <span className={`text-sm leading-[18px] text-${color} ${className}`}>{children}</span>
);
