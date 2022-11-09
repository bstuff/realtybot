import { LoaderFunction } from 'remix';
import { ApartmentDetailed, FavoriteButton, ToastBlock } from '~/components';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col bg-white">
      <div className="overflow-scroll pb-4">
        <div className="rb-content-container pt-4">
          <ApartmentDetailed />
        </div>
      </div>

      <ToastBlock>
        <div className="flex flex-col gap-3">
          <FavoriteButton />
          <button className="btn-md btn-primary">Позвонить</button>
        </div>
      </ToastBlock>
    </main>
  );
}
