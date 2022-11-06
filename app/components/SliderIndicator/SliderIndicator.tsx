import { FC } from 'react';

export const SliderIndicator: FC = () => {
  return (
    <div className="gap-2 flex justify-center">
      <div className='rounded-full bg-black w-3 h-0.5'/>
      <div className='rounded-full bg-gray/50 w-3 h-0.5'/>
      <div className='rounded-full bg-gray/50 w-3 h-0.5'/>
      <div className='rounded-full bg-gray/50 w-3 h-0.5'/>
    </div>
  );
};
