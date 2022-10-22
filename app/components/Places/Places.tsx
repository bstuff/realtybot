import { FC } from 'react';

export const Places: FC = () => {
  return (
    <div className="gap-4 flex flex-col">
      <button className="text-left rounded-lg bg-white px-8 py-6">
        <div className="text-base font-bold">В Москве</div>
        <div className="text-xs text-gray-500 mt-2">в пределах МКАД или в Новой Москве</div>
      </button>
      <button className="text-left rounded-lg bg-white px-8 py-6">
        <div className="text-base font-bold">В Московской области</div>
        <div className="text-xs text-gray-500 mt-2">Жизнь за городом - мой вариант</div>
      </button>
      <button className="text-left rounded-lg bg-white px-8 py-6">
        <div className="text-base font-bold">В Московской области</div>
        <div className="text-xs text-gray-500 mt-2">Жизнь за городом - мой вариант</div>
      </button>
    </div>
  );
};
