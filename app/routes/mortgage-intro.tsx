import { LoaderFunction } from 'remix';
import { MortgageIntro, MortgageIntroFilter, ToastBlock } from '~/components';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col bg-white">
      <MortgageIntro />

      <div className="mt-4">
        <MortgageIntroFilter />
      </div>

      <div className="flex-1" />
      <div className="mt-4">
        <ToastBlock>
          <div className="flex flex-col gap-3">
            <button className="btn-md btn-secondary">Посмотреть 145 вариантов</button>
            <button className="btn-md btn-primary">Позвонить</button>
          </div>
        </ToastBlock>
      </div>
    </main>
  );
}
