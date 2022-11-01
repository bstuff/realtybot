import { FC } from 'react';

export const MortgageFilters: FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="rb-text-heading">Фильтр</div>
        <button>
          <img className="" src={require('./assets/icn-close.svg')} />
        </button>
      </div>

      <div className="mt-4">
        <div className="rt-text-14 text-gray">Укажите количество комнат</div>
        <div className="mt-2 flex gap-2">
          <button className="btn btn-sm btn-primary flex-1 px-5">Студии</button>
          <button className="btn btn-sm btn-secondary flex-1 px-5">1</button>
          <button className="btn btn-sm btn-secondary flex-1 px-5">2</button>
          <button className="btn btn-sm btn-secondary flex-1 px-5">3</button>
          <button className="btn btn-sm btn-secondary flex-1 px-5">4</button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div>
          <div className="rt-text-14 text-gray">Ежемесячный платеж</div>
          <div className="mt-2 flex items-center justify-between gap-2 rounded-lg bg-gray-light pr-5">
            <input className="rb-text-16 flex-1 bg-transparent py-3 pl-5 font-semibold outline-none" />
            <div className="rb-text-16 font-medium text-gray">₽ / мес.</div>
          </div>
        </div>

        <div>
          <div className="rt-text-14 text-gray">Первый взнос</div>
          <div className="mt-2 flex items-center justify-between gap-2 rounded-lg bg-gray-light pr-5">
            <input className="rb-text-16 flex-1 bg-transparent py-3 pl-5 font-semibold outline-none" />
            <div className="rb-text-16 font-medium text-gray">₽</div>
          </div>
        </div>

        <div>
          <div className="rt-text-14 text-gray">Срок кредита</div>
          <div className="mt-2 flex items-center justify-between gap-2 rounded-lg bg-gray-light pr-5">
            <input className="rb-text-16 flex-1 bg-transparent py-3 pl-5 font-semibold outline-none" />
            <div className="rb-text-16 font-medium text-gray">лет</div>
          </div>
        </div>
      </div>
    </div>
  );
};
