import { FC } from 'react';

export const ProjectHeading: FC = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="rb-text-title">Peninsula</h1>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple">
          <img src={require('./assets/icn-map.svg')} alt="" />
        </div>
      </div>

      <div className="mt-[6px] flex flex-col gap-1">
        <div className="flex items-center">
          <img src={require('./assets/icn-dot.svg')} alt="" />
          <div className="rb-text-14 ml-2">Al Wasl</div>
          <img className="ml-2" src={require('./assets/icn-walk.svg')} alt="" />
          <div className="rb-text-14 ml-[6px]">5 мин.</div>
        </div>
        <div className="mt-2 flex items-center">
          <img src={require('./assets/icn-dot.svg')} alt="" />
          <div className="rb-text-14 ml-2">Al Karama</div>
          <img className="ml-2" src={require('./assets/icn-walk.svg')} alt="" />
          <div className="rb-text-14 ml-[6px]">25 мин.</div>
        </div>
      </div>
    </div>
  );
};
