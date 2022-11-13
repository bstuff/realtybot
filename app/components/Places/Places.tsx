import { FC } from 'react';
import { Link } from 'remix';
import { routes } from '~/config';

export const Places: FC = () => {
  return (
    <div className="gap-4 flex flex-col">
      <Link to={routes.chooseProjects} className="text-left rounded-lg bg-gray-light px-8 py-6">
        <div className="text-base font-bold">В Дубаи</div>
        <div className="text-xs text-gray-500 mt-2">Ближе к даунтауну и бизнес-центрам</div>
      </Link>
      <Link to={routes.chooseProjects} className="text-left rounded-lg bg-gray-light px-8 py-6">
        <div className="text-base font-bold">В Марине</div>
        <div className="text-xs text-gray-500 mt-2">Жизнь у залива - мой вариант</div>
      </Link>
    </div>
  );
};
