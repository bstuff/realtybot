import { LoaderFunction } from 'remix';
import { ToastBlock } from '~/components';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col bg-white">
      <div className="flex-1 overflow-scroll py-4">
        <div className="rb-content-container">
          <h1 className="rb-text-heading flex items-center gap-2">
            <span>Избранные объявления</span>
            <span className="rb-text-14 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple text-white">
              12
            </span>
          </h1>

          <ul className="mt-4 flex flex-col gap-3">
            {Array.from(Array(10)).map((_, i) => (
              <div className="rounded-2xl bg-gray-light py-4 px-5" key={i}>
                <div className="rb-text-16 font-semibold">6 457 56{i}</div>
                <div className="rb-text-12 mt-2 text-gray">В ипотеку от 14 365 ₽/мес.</div>
                <div className="rb-text-12 mt-2 flex font-medium">
                  <span>1-комн.</span>
                  <span className="px-1 text-gray">•</span>
                  <span>23,8м2</span>
                  <span className="px-1 text-gray">•</span>
                  <span className="text-gray">Al Quoz</span>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <ToastBlock>
        <button className="btn-md btn-primary w-full">Позвонить</button>
      </ToastBlock>
    </main>
  );
}
