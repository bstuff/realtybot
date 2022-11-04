import { FC } from 'react';

export const ProjectSummarySlider: FC = () => {
  return (
    <div className="flex gap-2 flex-none">
      <div className="flex flex-none items-center rounded-lg bg-gray-light px-5 py-2">
        <img src={require('./assets/icn-building.svg')} alt="" />
        <div className="ml-1">
          <div className="rb-text-12 whitespace-pre font-semibold">от 5,5 млн ₽</div>
          <div className="rb-text-11 mt-1 whitespace-pre text-gray">291 квартира</div>
        </div>
      </div>
      <div className="flex flex-none items-center rounded-lg bg-gray-light px-5 py-2">
        <img src={require('./assets/icn-calc.svg')} alt="" />
        <div className="ml-1">
          <div className="rb-text-12 whitespace-pre font-semibold">Ипотека 4,99%</div>
          <div className="rb-text-11 mt-1 whitespace-pre text-gray">от 25 919₽ / мес</div>
        </div>
      </div>
      <div className="flex flex-none items-center rounded-lg bg-gray-light px-5 py-2">
        <img src={require('./assets/icn-cal.svg')} alt="" />
        <div className="ml-1">
          <div className="rb-text-12 whitespace-pre font-semibold">30 июня 2021</div>
          <div className="rb-text-11 mt-1 whitespace-pre text-gray">ближайшее заселение</div>
        </div>
      </div>
    </div>
  );
};
