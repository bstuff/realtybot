import { FC } from 'react';

export const ProjectHeadingImage: FC = () => {
  return (
    <div className="">
      <div className={`aspect-[0.906] relative w-full overflow-hidden`}>
        <picture>
          <source srcSet={require('./assets/Rectangle 1250.webp')} type="image/webp" />
          <img
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover"
            src={require('./assets/Rectangle 1250.png')}
          />
        </picture>

        <div className="absolute inset-0 z-10 p-5">
          <div className="flex gap-1">
            <label className="rb-text-12 inline-block whitespace-nowrap rounded-xl bg-[#282D3C]/70 px-3 py-2 text-white">
              Скидка до 8.8%
            </label>
            <label className="rb-text-12 inline-block whitespace-nowrap rounded-xl bg-[#282D3C]/70 px-3 py-2 text-white">
              Новый корпус
            </label>
            <button className="rb-text-12 inline-block whitespace-nowrap rounded-xl bg-[#282D3C]/70 px-3 py-2 text-white">
              +1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
