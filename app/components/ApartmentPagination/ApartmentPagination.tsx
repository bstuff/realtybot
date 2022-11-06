import { FC } from 'react';

export type ApartmentPaginationProps = {
  isFavorite?: boolean;
};

export const ApartmentPagination: FC<ApartmentPaginationProps> = (props) => {
  const { isFavorite = false } = props;

  return (
    <div className="flex justify-between">
      <button className="btn-md btn-secondary flex w-20 items-center justify-center">
        <img src={require('~/components/Icons/icn-chevron-left-purple-16.svg')} />
      </button>
      <button className="btn-md btn-secondary flex w-20 items-center justify-center">
        <img src={require('~/components/Icons/icn-heart-purple-16.svg')} />
      </button>
      <button className="btn-md btn-secondary flex w-20 items-center justify-center">
        <img src={require('~/components/Icons/icn-chevron-right-purple-16.svg')} />
      </button>
    </div>
  );
};
