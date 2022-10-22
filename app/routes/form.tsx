import { LoaderFunction } from 'remix';
import { Places } from '~/components/Places';

interface LoaderData {}

export const loader: LoaderFunction = ({ params }): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="bg-gray-100 h-full pt-8">
      <h1 className="text-center text-3xl">
        Расскажите, где вам
        <br />
        нравится жить?
      </h1>

      <div className="mt-8">
        <Places />
      </div>
    </main>
  );
}
