import { FC, PropsWithChildren } from 'react';

export const Heading: FC<PropsWithChildren> = ({ children }) => (
  <span className="text-xl font-semibold leading-6">{children}</span>
);

export const Description: FC<PropsWithChildren> = ({ children }) => (
  <span className="text-sm leading-5">{children}</span>
);
