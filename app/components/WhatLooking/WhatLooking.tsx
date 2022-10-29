import { FC } from 'react';
import { Text } from '~/components';

export const WhatLooking: FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex flex-row items-center gap-2 overflow-hidden rounded-lg bg-gray-lighter p-3 pl-[50px]">
        <div className="absolute left-1 bottom-0">
          <img src={require('./assets/icon.svg')} />
        </div>
        <span className="flex-1">
          <Text.Base>Что ищем?</Text.Base>
        </span>
        <img src={require('./assets/x.svg')} />
      </div>

      <div className="flex flex-row gap-3">
        <div className="flex flex-1 flex-col items-center rounded-2xl bg-[#E1F2FB] p-3 text-center">
          <img src={require('./assets/icn-calc.svg')} />
          <Text.Xs className="mt-3 inline-block font-semibold">Рассчитать ипотеку</Text.Xs>
        </div>
        <div className="flex flex-1 flex-col items-center rounded-2xl bg-[#E7FBE1] p-3 text-center">
          <img src={require('./assets/icn-plan.svg')} />
          <Text.Xs className="mt-3 inline-block font-semibold">Подобрать квартиру</Text.Xs>
        </div>
        <div className="flex flex-1 flex-col items-center rounded-2xl bg-[#FBE1F4] p-3 text-center">
          <img src={require('./assets/icn-bld.svg')} />
          <Text.Xs className="mt-3 inline-block font-semibold">Ознакомиться с проектами</Text.Xs>
        </div>
      </div>
    </div>
  );
};
