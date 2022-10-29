import { FC, PropsWithChildren } from 'react';

interface ColorProp {
  color?: 'black' | 'gray';
}

export const Heading: FC<PropsWithChildren & ColorProp> = ({ children, color = 'black' }) => (
  <span className={`text-xl font-semibold leading-6 text-${color}`}>{children}</span>
);

export const Description: FC<PropsWithChildren & ColorProp> = ({ children, color = 'black' }) => (
  <span className={`text-sm leading-5 text-${color}`}>{children}</span>
);
