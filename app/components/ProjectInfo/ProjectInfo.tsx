import { FC } from 'react';
import { useToggle } from 'react-use';

export const ProjectInfo: FC = () => {
  const [isCollapsed, toggleIsCollapsed] = useToggle(true);

  return (
    <div className="">
      <div
        className={`relative ${isCollapsed ? 'aspect-[0.92]' : 'aspect-[1.6]'} w-full overflow-hidden rounded-[20px]`}
      >
        <picture>
          <source srcSet={require('./assets/Rectangle 1195.webp')} type="image/webp" />
          <img
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover"
            src={require('./assets/Rectangle 1195.png')}
          />
        </picture>

        <div className="absolute inset-0 z-10 p-5">
          <label className="rb-text-12 inline-block whitespace-nowrap rounded-xl bg-[#282D3C]/70 px-3 py-2 text-white">
            Старт продаж
          </label>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <h1 className="rb-text-heading tracking-wide">Peninsula</h1>
          <span className="rb-text-14 font-semibold">от 6,1 млн ₽</span>
        </div>

        <div className="mt-2 flex justify-between">
          <div className="rb-text-14 flex">
            <h2>Al Wasl</h2>
            <img className="ml-2" src={require('~/components/Icons/icn-car-gray-16.svg')} />
            <span className="ml-1">20 мин.</span>
          </div>
          <button className="rb-text-14 text-purple" onClick={toggleIsCollapsed}>
            {isCollapsed ? 'Подробнее о проекте' : 'Свернуть'}
          </button>
        </div>

        {!isCollapsed && (
          <>
            <div className="my-4 border-t border-t-gray-light" />
            <div className="flex flex-col gap-3">
              <div className="flex justify-between gap-2">
                <span className="rb-text-12 text-purple">Студии</span>
                <span className="rb-text-12 font-medium">от 6,1 млн ₽</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="rb-text-12 text-purple">1-комн. квартиры</span>
                <span className="rb-text-12 font-medium">от 6,0 млн ₽</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="rb-text-12 text-purple">2-комн. квартиры</span>
                <span className="rb-text-12 font-medium">от 7,5 млн ₽</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="rb-text-12 text-purple">3-комн. квартиры +</span>
                <span className="rb-text-12 font-medium">от 7,5 млн ₽</span>
              </div>
              <div className="mt-1 flex justify-between gap-2">
                <span className="rb-text-12">Заселение до 30 апр. 2023</span>
                <span className="rb-text-12 text-gray">С отделкой</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
