import { FC, PropsWithChildren } from 'react';

export const ContentContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="px-5">{children}</div>;
};
