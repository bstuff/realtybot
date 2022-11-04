import { LoaderFunction } from 'remix';
import { ProjectHeading, ProjectHeadingImage } from '~/components';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex h-full flex-col bg-white">
      <ProjectHeadingImage />
      <div className="rb-content-container relative -mt-6 rounded-t-3xl bg-white pt-6">
        <div className="px-1 pb-6">
          <ProjectHeading />
        </div>
      </div>
    </main>
  );
}
