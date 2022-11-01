import { LoaderFunction } from 'remix';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-white">
      <div className="rb-content-container flex h-full w-full flex-col items-center justify-center">
        <div className="rounded-full bg-gray-light p-3">
          <img src={require('~/components/Icons/icn-check-purple-32.svg')} />
        </div>
        <h1 className="rb-text-heading mt-4">Заявка передана</h1>

        <div className="rb-text-description mt-1">С вами свяжется наш менеджер</div>
        <button className="btn-md btn-primary mt-8 w-full" type="button">
          Вернуться в меню
        </button>
      </div>
    </main>
  );
}
