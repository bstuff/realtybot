import { FC } from 'react';
import { SliderIndicator } from '~/components';

export const ApartmentDetailed: FC = () => {
  return (
    <div className="">
      <div className="flex justify-between gap-10">
        <button className="btn btn-md btn-secondary flex-1">
          <img className="inline-block" src={require('~/components/Icons/icn-external.svg')} alt="" />
        </button>
        <button className="btn btn-md btn-secondary flex-1">
          <img className="inline-block" src={require('~/components/Icons/icn-heart-purple-16.svg')} alt="" />
        </button>
      </div>
      <div className="mt-0">
        <img src={require('./assets/Frame 25854.png')} alt="" className="block" />
      </div>

      <div className="mt-2">
        <SliderIndicator />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="rb-text-title">1-комнатная 25,6 м2</h2>
          <div className="rb-text-12 rounded-full bg-purple px-3 py-1.5 text-white">до -8,8%</div>
        </div>

        <div className="rb-text-12 mt-1 text-gray">Отделка входит в стоимость</div>

        <div className="rb-text-16 mt-4 font-semibold">6 458 746 ₽</div>
      </div>

      <div className="my-6 w-full border-t border-t-gray-light" />

      <div>
        <div className="rb-text-14 text-gray">В ипотеку:</div>
        <div className="rb-text-16 mt-1 font-semibold">от 14 336 ₽/мес.</div>
      </div>

      <div className="my-6 w-full border-t border-t-gray-light" />

      <div className="rb-text-14">
        <h3 className="font-medium">Al Wasl</h3>
        <div className="mt-2 text-gray">Корп. 10, секц. 4, этаж 2 из 22, номер 139</div>
        <div className="mt-2 flex">
          <span>Dubai</span>
          <img className="mr-1.5 ml-2" src={require('~/components/Icons/icn-car-gray-16.svg')} />
          <span>10 мин.</span>
        </div>
        <div className="mt-3">Заселение до 31 мая 2023</div>
      </div>

      <div className="my-6 w-full border-t border-t-gray-light" />

      <div className="rb-text-16">
        <h3 className="font-semibold">Планировка</h3>
        <ul className="mt-4 flex flex-col gap-4">
          <li className="flex justify-between">
            <span className="text-gray">Тип планировки</span>
            <span>Угловая, евро</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray">Типовая группа</span>
            <span>С-25-Л-Ч(1.4)</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray">Артикул</span>
            <span>ЛЮБ7/1К68-2-13-03-264</span>
          </li>
        </ul>

        <div className="mt-6 text-purple">Все характеристики</div>
      </div>

      <div className="my-6 w-full border-t border-t-gray-light" />

      <div>
        <h3 className="rb-text-16 font-semibold">О проекте</h3>
        <ul className="mt-4 flex flex-col gap-4">
          <li className="flex items-center gap-5 rounded-2xl bg-gray-light py-4 px-6">
            <img src={require('./assets/icn-edu.svg')} alt="" />
            <div>
              <div className="rb-text-16 font-semibold">Образование</div>
              <div className="rb-text-14 mt-1 text-gray">Детские сады и образов.центры</div>
            </div>
          </li>

          <li className="flex items-center gap-5 rounded-2xl bg-gray-light py-4 px-6">
            <img src={require('./assets/icn-transport.svg')} alt="" />
            <div>
              <div className="rb-text-16 font-semibold">Транспорт</div>
              <div className="rb-text-14 mt-1 text-gray">В перспективе метро</div>
            </div>
          </li>

          <li className="flex items-center gap-5 rounded-2xl bg-gray-light py-4 px-6">
            <img src={require('./assets/icn-eco.svg')} alt="" />
            <div>
              <div className="rb-text-16 font-semibold">Экология</div>
              <div className="rb-text-14 mt-1 text-gray">Жизнь на берегу</div>
            </div>
          </li>

          <li className="flex items-center gap-5 rounded-2xl bg-gray-light py-4 px-6">
            <img src={require('./assets/icn-bio.svg')} alt="" />
            <div>
              <div className="rb-text-16 font-semibold">Дворы</div>
              <div className="rb-text-14 mt-1 text-gray">Территория без машин и шума</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
