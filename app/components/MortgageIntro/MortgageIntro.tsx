import { FC } from 'react';
import { ContentContainer, Text } from '~/components';

export const MortgageIntro: FC = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-b-[20px] py-4">
      <picture>
        <source srcSet={require('./assets/bg-mortgage-intro.webp')} type="image/webp" />
        <img
          alt=""
          className="-z-1 absolute inset-0 h-full w-full object-cover"
          src={require('./assets/bg-mortgage-intro.png')}
        />
      </picture>

      <div className="relative">
        <ContentContainer>
          <div className="flex flex-row justify-between gap-2">
            <button className="btn-sm btn-primary flex-1">0,01%</button>
            <button className="btn-sm btn-secondary flex-1">Семейная</button>
            <button className="btn-sm btn-secondary flex-1">IT-ипотека</button>
          </div>

          <div className="flow-row mt-4 flex gap-3">
            <div className="flex-1 rounded-[20px] bg-purple p-5">
              <div>
                <div className="rb-text-12 text-e2f9eb">Стандартная</div>
                <div className="rb-text-16 mt-2 text-white">Обычная</div>
              </div>
              <div className="my-4 border-t border-white" />
              <div className="flex flex-col gap-5">
                <div>
                  <div className="rb-text-12 text-e2f9eb">Ставка</div>
                  <div className="rb-text-14 mt-2 text-white">от 0,01%</div>
                </div>
                <div>
                  <div className="rb-text-12 text-e2f9eb">Переплата</div>
                  <div className="rb-text-14 mt-2 text-white">5 328 ₽</div>
                </div>
              </div>
              <div className="my-4 border-t border-white" />
              <div>
                <div className="rb-text-12 text-e2f9eb">Экономия</div>
                <div className="rb-text-16 mt-2 text-white">4 673 522 ₽</div>
              </div>
            </div>

            <div className="flex-1 rounded-[20px] bg-white p-5">
              <div>
                <div className="rb-text-12 text-93a3b4">Ипотека 0,01%</div>
                <div className="rb-text-16 mt-2 text-black">Выгодная</div>
              </div>
              <div className="my-4 border-t border-dcdde8" />
              <div className="flex flex-col gap-5">
                <div>
                  <div className="rb-text-12 text-93a3b4">Ставка</div>
                  <div className="rb-text-14 mt-2 text-black">6,7%</div>
                </div>
                <div>
                  <div className="rb-text-12 text-93a3b4">Переплата</div>
                  <div className="rb-text-14 mt-2 text-black">4 678 973 ₽</div>
                </div>
              </div>
              <div className="my-4 border-t border-dcdde8" />
              <div>
                <div className="rb-text-12 text-93a3b4">Экономия</div>
                <div className="rb-text-16 mt-2 text-black">0 ₽</div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>
    </div>
  );
};
