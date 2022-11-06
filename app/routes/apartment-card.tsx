import { LoaderFunction } from 'remix';
import { ApartmentCard, ApartmentPagination, FavoriteButton, ToastBlock } from '~/components';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col bg-white">
      <div className="rb-content-container pt-4">
        <ApartmentCard />

        <div className="mt-4">
          <ApartmentPagination />
        </div>
      </div>

      <div className="flex-1" />
      <div className="mt-4">
        <ToastBlock>
          <div className="flex flex-col gap-3">
            <FavoriteButton />
            <button className="btn-md btn-primary">Позвонить</button>
          </div>
        </ToastBlock>
      </div>
    </main>
  );
}
