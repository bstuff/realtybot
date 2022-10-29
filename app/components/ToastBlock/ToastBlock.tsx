import { FC, PropsWithChildren } from 'react';

export const ToastBlock: FC<PropsWithChildren> = ({ children }) => {
  return <div className="rounded-tr-[20px] rounded-tl-[20px] bg-white px-5 py-4 shadow-up">{children}</div>;
};
