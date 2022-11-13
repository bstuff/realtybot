import { Link, LoaderFunction } from 'remix';
import { FavoriteButton, ToastBlock, WhatLooking } from '~/components';
import { routes } from '~/config/routes';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col bg-white">
      <div className="flex-1 overflow-scroll py-4">
        <div className="rb-content-container">
          <h1 className="rb-text-heading text-center">Какая планировка вас интересует?</h1>

          <ul className="mt-4 flex flex-col gap-3">
            <Link to={routes.apartments} className="rounded-2xl bg-gray-light py-4 px-5">
              <div className="flex justify-between">
                <div className="rb-text-16 font-semibold">Студии</div>
                <div className="rb-text-14 text-purple">от 18 000 ₽/мес.</div>
              </div>
              <div className="mt-3 flex items-center">
                <div className="rb-text-14 text-gray">взнос от 1 265 000 ₽</div>
                <span className="px-2 text-gray/50">•</span>
                <div className="rb-text-14 text-gray">срок до 23 лет</div>
              </div>
            </Link>

            <Link to={routes.apartments} className="rounded-2xl bg-gray-light py-4 px-5">
              <div className="flex justify-between">
                <div className="rb-text-16 font-semibold">1-комнатные</div>
                <div className="rb-text-14 text-purple">от 23 000 ₽/мес.</div>
              </div>
              <div className="mt-3 flex items-center">
                <div className="rb-text-14 text-gray">взнос от 1 265 000 ₽</div>
                <span className="px-2 text-gray/50">•</span>
                <div className="rb-text-14 text-gray">срок до 23 лет</div>
              </div>
            </Link>

            <Link to={routes.apartments} className="rounded-2xl bg-gray-light py-4 px-5">
              <div className="flex justify-between">
                <div className="rb-text-16 font-semibold">2-комнатные</div>
                <div className="rb-text-14 text-purple">от 35 000 ₽/мес.</div>
              </div>
              <div className="mt-3 flex items-center">
                <div className="rb-text-14 text-gray">взнос от 1 265 000 ₽</div>
                <span className="px-2 text-gray/50">•</span>
                <div className="rb-text-14 text-gray">срок до 23 лет</div>
              </div>
            </Link>

            <Link to={routes.apartments} className="rounded-2xl bg-gray-light py-4 px-5">
              <div className="flex justify-between">
                <div className="rb-text-16 font-semibold">3-комнатные</div>
                <div className="rb-text-14 text-purple">от 43 000 ₽/мес.</div>
              </div>
              <div className="mt-3 flex items-center">
                <div className="rb-text-14 text-gray">взнос от 1 265 000 ₽</div>
                <span className="px-2 text-gray/50">•</span>
                <div className="rb-text-14 text-gray">срок до 23 лет</div>
              </div>
            </Link>
          </ul>
        </div>
      </div>

      <ToastBlock>
        <WhatLooking />

        <div className="mt-3">
          <FavoriteButton />
        </div>
        <div className="mt-3">
          <button className="btn-md btn-primary w-full">Позвонить</button>
        </div>
      </ToastBlock>
    </main>
  );
}
