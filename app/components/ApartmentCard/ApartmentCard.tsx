import { FC } from 'react';
import { Link } from 'remix';
import { SliderIndicator } from '~/components';
import { routes } from '~/config/routes';

export const ApartmentCard: FC = () => {
  return (
    <div className="">
      <h1 className="rb-text-title">1-комнатная квартира</h1>
      <div className="mt-3 flex gap-1">
        <div className="rb-text-16">Al Wasl</div>
        <div className="rb-text-16 text-gray">корп. 1, секц. 1</div>
      </div>
      <div className="rb-text-14 mt-0.5 text-gray">Заселение до 31 апр. 2022</div>

      <div className="mt-2">
        <img src={require('./assets/Frame 25854.png')} alt="" className="block" />
      </div>

      <div className="mt-2">
        <SliderIndicator />
      </div>

      <div className="mt-3">
        <div className="rb-text-16 font-semibold">6 458 746 ₽</div>
        <div className="rb-text-14 mt-1 text-gray">В ипотеку от 14 336 ₽/мес.</div>
        <div className="rb-text-12 mt-3 flex font-medium">
          <span>1-комн.</span>
          <span className="px-1 text-gray">•</span>
          <span>12 из 17 этажей</span>
          <span className="px-1 text-gray">•</span>
          <span>25,6 м2</span>
        </div>
      </div>
      <div className="mt-4">
        <Link to={routes.apartment} className="btn btn-md btn-secondary w-full">
          Подробнее
        </Link>
      </div>
    </div>
  );
};
