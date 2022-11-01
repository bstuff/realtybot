import { LoaderFunction } from 'remix';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col bg-white">
      <div className="rb-content-container pt-4">
        <h1 className="rb-text-heading">Оставить заявку на ипотеку</h1>

        <form className="mt-4">
          <div className="rb-text-12 text-gray">Введите телефон</div>
          <div className="mt-2 flex items-center justify-between gap-1 rounded-lg bg-gray-light px-5">
            <div className="rb-text-16 font-medium">+7</div>
            <input className="rb-text-16 flex-1 bg-transparent py-3 font-medium outline-none" type="tel" />
          </div>
          <button className="btn-md btn-primary mt-5 w-full" type="button">
            Оставить заявку
          </button>
        </form>

        <div className="rb-text-12 mt-4 text-gray">
          Нажимая кнопку «Оставить заявку», вы подтверждаете свое согласие на{' '}
          <span className="text-blue">обработку персональных данных</span>
        </div>
      </div>
    </main>
  );
}
