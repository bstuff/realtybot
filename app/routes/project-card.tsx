import { LoaderFunction } from 'remix';
import { ToastBlock, ProjectInfo, ProjectPagination } from '~/components';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col bg-white">
      <div className="rb-content-container pt-4">
        <ProjectInfo />

        <div className="mt-8">
          <ProjectPagination />
        </div>
      </div>

      <div className="flex-1" />
      <div className="mt-4">
        <ToastBlock>
          <div className="flex flex-col gap-3">
            <button className="btn-md btn-secondary">
              <span className="flex justify-center gap-1">
                <img src={require('~/components/Icons/icn-heart-purple-16.svg')} />
                Посмотреть 145 вариантов
              </span>
            </button>
            <button className="btn-md btn-primary">Позвонить</button>
          </div>
        </ToastBlock>
      </div>
    </main>
  );
}
