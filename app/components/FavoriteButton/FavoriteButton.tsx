import { FC } from 'react';
import { Link } from 'remix';
import { Text } from '~/components';
import { routes } from '~/config/routes';

export const FavoriteButton: FC = () => {
  return (
    <Link
      to={routes.favorites}
      className="flex w-full flex-row items-center justify-center rounded-lg bg-gray-light p-3"
    >
      <img src={require('./assets/icn-heart.svg')} />
      <Text.Sm color="purple" className="ml-1">
        Избранные объявления
      </Text.Sm>
    </Link>
  );
};
