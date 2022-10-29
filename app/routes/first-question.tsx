import { LoaderFunction } from 'remix';
import { ContentContainer } from '~/components/ContentContainer';
import { Places } from '~/components/Places';
import { StepsProgress } from '~/components/StepsProgress';
import { Text } from '~/components/Text';

interface LoaderData {}

export const loader: LoaderFunction = ({ params }): LoaderData => {
  return {};
};

export default function () {
  return (
    <main className="bg-white h-full pt-4">
      <ContentContainer>
        <h1 className="whitespace-pre-wrap text-center">
          <Text.Heading>{'Расскажите, где вам\nнравится жить?'}</Text.Heading>
        </h1>
        <div className="mt-2 whitespace-pre-wrap text-center">
          <Text.Description color="gray">{'Ответьте на 3 вопроса и мы подберем вам лучший вариант'}</Text.Description>
        </div>

        <div className="mt-8">
          <StepsProgress />
        </div>

        <div className="mt-8">
          <Places />
        </div>
      </ContentContainer>
    </main>
  );
}
