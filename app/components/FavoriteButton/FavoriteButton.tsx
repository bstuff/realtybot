import { FC } from 'react';
import { Text } from '~/components';

export const FavoriteButton: FC = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center rounded-lg bg-gray-light p-3">
      <img src={require('./assets/icn-heart.svg')} />
      <Text.Sm color="purple" className="ml-1">
        Избранные объявления
      </Text.Sm>
    </div>
  );
};
