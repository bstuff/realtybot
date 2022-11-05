import { LoaderFunction } from 'remix';
import { ProjectDetailed, ProjectHeading, ProjectHeadingImage, ProjectSummarySlider } from '~/components';

interface LoaderData {}

export const loader: LoaderFunction = (): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="flex min-h-full flex-col bg-white">
      <ProjectHeadingImage />
      <div className="rb-content-container relative -mt-6 rounded-t-3xl bg-white pt-6">
        <div className="px-1 pb-6">
          <ProjectHeading />
        </div>

        <div className="-mx-5 box-border flex justify-between overflow-scroll px-4">
          <ProjectSummarySlider />
        </div>

        <div className="mt-16">
          <ProjectDetailed />
        </div>
      </div>
    </main>
  );
}
