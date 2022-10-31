import { LoaderFunction } from 'remix';
import { MortgageIntro } from '~/components';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col bg-white">
      <MortgageIntro />
    </main>
  );
}
