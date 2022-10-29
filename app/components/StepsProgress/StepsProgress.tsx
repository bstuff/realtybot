import { FC } from 'react';

export const StepsProgress: FC<{}> = ({}) => {
  return (
    <div className="flex items-center justify-center text-sm leading-[14px]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-light">
        <img src={require('./assets/check-16.svg')} />
      </div>
      <div className="h-[2px] w-6 bg-gray-light" />
      <div className="text-white flex h-12 w-12 items-center justify-center rounded-full bg-purple">2</div>
      <div className="h-[2px] w-6 bg-gray-light" />
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-light text-purple">3</div>
      <div className="h-[2px] w-6 bg-gray-light" />
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-light text-purple">4</div>
    </div>
  );
};
