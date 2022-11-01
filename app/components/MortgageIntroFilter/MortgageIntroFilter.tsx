import { FC } from 'react';

export const MortgageIntroFilter: FC = () => {
  return (
    <div className="">
      <div className="flex justify-between gap-2">
        <div className="rb-text-heading">1-комнатные</div>
        <img src={require('./assets/icn-filter.svg')} />
      </div>
      <div className="mt-3 flex justify-between gap-2">
        <div className="flex-1 rounded-lg bg-gray-light p-2 text-center">
          <div className="rb-text-12 font-semibold">от 20 000 ₽</div>
          <div className="rb-text-11 mt-1 text-gray">в месяц</div>
        </div>
        <div className="flex-1 rounded-lg bg-gray-light p-2 text-center">
          <div className="rb-text-12 font-semibold">1 500 000 ₽</div>
          <div className="rb-text-11 mt-1 text-gray">первый взнос</div>
        </div>
        <div className="flex-1 rounded-lg bg-gray-light p-2 text-center">
          <div className="rb-text-12 font-semibold">до 30 лет</div>
          <div className="rb-text-11 mt-1 text-gray">срок</div>
        </div>
      </div>
      <div className="mt-4 mb-3 border-t border-dcdde8" />
      <div className="rb-text-16 flex justify-between gap-2">
        <div className="text-gray">Стоимость квартиры:</div>
        <div className="font-semibold">7 324 082 ₽</div>
      </div>
    </div>
  );
};
