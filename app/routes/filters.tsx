import { LoaderFunction } from 'remix';
import { ToastBlock, MortgageFilters } from '~/components';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col bg-white">
      <div className="rb-content-container pt-4">
        <MortgageFilters />
      </div>

      <div className="flex-1" />
      <div className="mt-4">
        <ToastBlock>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between gap-2 rounded-xl bg-[#d4f4db] py-3 px-4">
              <div className="rb-text-12 text-gray">Вы сможете позволить себе квартиру, за: </div>
              <div className="rb-text-20 flex whitespace-nowrap font-semibold">7 324 082 ₽</div>
            </div>
            <button className="btn-md btn-primary">Применить</button>
          </div>
        </ToastBlock>
      </div>
    </main>
  );
}
