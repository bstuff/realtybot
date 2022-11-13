import { FC } from 'react';
import { Link } from 'remix';
import { routes } from '~/config/routes';

export const ProjectDetailed: FC = () => {
  return (
    <div className="">
      <h2 className="rb-text-title">«Peninsula» — место, которое вдохновляет</h2>
      <p className="rb-text-description mt-4">
        Престижное расположение в Северо-Западном направлении Дубаи, развитая инфраструктура, простор для развлечений
        и отдыха, современный бизнес-кластер и уникальные общественные пространства — в «Peninsula» можно брать
        от жизни все.
      </p>

      <div className="relative mt-8 overflow-hidden rounded-3xl">
        {/* TODO: picture tag */}
        <video src="" className="w-full" poster={require('./assets/Rectangle 13.png')} />
        <button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <img src={require('./assets/icn-play.svg')} />
        </button>
      </div>

      <div className="mt-4 flex justify-between gap-4">
        <div className="flex flex-1 flex-col items-center rounded-3xl bg-purple px-6 pt-5 pb-6 text-white">
          <img src={require('./assets/icn-building.svg')} alt="" />
          <div className="rb-text-14 mt-3 text-center font-semibold">Подробнее о проекте</div>
        </div>
        <div className="flex flex-1 flex-col items-center rounded-3xl bg-gray-light px-6 pt-5 pb-6 text-black">
          <img src={require('./assets/icn-parking.svg')} alt="" />
          <div className="rb-text-14 mt-3 text-center font-semibold">Транспортная доступность</div>
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-purple p-6 text-white">
        <img src={require('./assets/icn-calc.svg')} alt="" />
        <div className="rb-text-20 mt-4 font-semibold">Ипотека от 0.01%</div>
        <div className="rb-text-14 mt-2">
          Что, если мы скажем вам, что оформлять ипотеку может быть совсем не страшно, а выплачивать ее — легко
          и комфортно?
        </div>
        <button className="btn-md btn-white mt-6 w-full">Рассчитать ипотеку</button>
      </div>

      <div className="mt-10">
        <h3 className="rb-text-title">Сервисы для счастливой жизни</h3>
        <div className="mt-7 flex flex-col gap-4">
          <div className="rounded-3xl bg-gray-light p-6">
            <img src={require('./assets/icn-family.svg')} alt="" />
            <h4 className="rb-text-16 mt-3 font-medium">Заезжайте и живите!</h4>
            <div className="rb-text-14 mt-2 text-gray">Квартиры с готовой отделкой, кухней и системой хранения </div>
          </div>
          <div className="rounded-3xl bg-gray-light p-6">
            <img src={require('./assets/icn-tradein.svg')} alt="" />
            <h4 className="rb-text-16 mt-3 font-medium">Trade-In</h4>
            <div className="rb-text-14 mt-2 text-gray">Обменяйте квартиру на новую в «Самолет»</div>
          </div>
        </div>
        <button className="btn-md btn-primary mt-4 w-full">Все сервисы</button>
      </div>

      <div className="mt-10">
        <h3 className="rb-text-title">Расположение и инфраструктура</h3>
        <div className="mt-4 flex gap-2">
          <button className="btn-sm btn-secondary flex flex-1 items-center justify-center">
            <img className="mr-1" src={require('./assets/icn-compass.svg')} alt="" /> Маршрут
          </button>
          <button className="btn-sm btn-secondary flex flex-1 items-center justify-center">
            <img className="mr-1" src={require('./assets/icn-map.svg')} alt="" /> На карте
          </button>
        </div>
        {/* TODO: picture tag */}
        <img className="mt-12 rounded-3xl" src={require('./assets/Frame 25880.png')} alt="" />
        <button className="btn-md btn-primary mt-6 w-full">Смотреть на карте</button>
      </div>

      <div className="mt-16 rounded-3xl bg-purple p-6 text-white">
        <img src={require('./assets/icn-plan.svg')} alt="" />
        <div className="rb-text-20 mt-4 font-semibold">Подобрать квартиру</div>
        <div className="rb-text-14 mt-2">
          Подберем подходящую квартиру в этом жилом комплексе всего за 3 клика и 10 секунд
        </div>
        <Link to={routes.chooseApartments} className="btn btn-md btn-white mt-6 w-full">Подобрать квартиру</Link>
      </div>

      <div className="mt-16">
        <h3 className="rb-text-title">Отделка квартир</h3>
        <button className="rb-text-title flex items-center text-purple">
          <span className="mr-0.5">14 корпус</span>{' '}
          <img src={require('./assets/icn-chevron-down.svg')} className="ml-1" />
        </button>

        <div className="mt-4 flex gap-2">
          <button className="btn-sm btn-primary px-4">Гостинная</button>
          <button className="btn-sm btn-secondary px-4">Спальня</button>
          <button className="btn-sm btn-secondary px-4">Кухня</button>
          <button className="btn-sm btn-secondary px-4">Прихожая</button>
        </div>
        <div className="relative -mx-5 mt-10">
          {/* TODO: picture tag */}
          <img src={require('./assets/image 138.png')} alt="" />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="rb-text-title">Особенности</h3>
        <div className="mt-7 flex justify-between gap-4">
          <div className="flex flex-1 flex-col items-center justify-between rounded-3xl bg-purple px-6 pt-5 pb-6 text-white">
            <img src={require('./assets/icn-location.svg')} alt="" />
            <div className="rb-text-14 mt-3 flex flex-1 items-end text-center font-semibold">Расположение</div>
            <div className="rb-text-11 mt-1 text-center">На северо-западе Dubai</div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-between rounded-3xl bg-gray-light px-6 pt-5 pb-6 text-black">
            <img src={require('./assets/icn-surrounding.svg')} alt="" />
            <div className="rb-text-14 mt-3 flex flex-1 items-end text-center font-semibold">Транспорт и окружение</div>
            <div className="rb-text-11 mt-1 text-center text-gray">Пляжи в 200м. от резиденции</div>
          </div>
        </div>
        <button className="btn-md btn-secondary mt-4 w-full">Все особенности проекта</button>
      </div>

      <div className="mt-10">
        <h3 className="rb-text-title">Выбери свое в Peninsula</h3>
        <div className="mt-5 flex justify-between gap-4">
          <Link to={routes.mortgageCallback} className="flex flex-1 flex-col items-center rounded-2xl bg-[#E1F2FB] px-6 py-3">
            <img src={require('./assets/icn-calc-blue.svg')} alt="" />
            <div className="rb-text-11 mt-3 text-center font-semibold">Рассчитать ипотеку</div>
          </Link>
          <Link to={routes.chooseProjects} className="flex flex-1 flex-col items-center rounded-2xl bg-[#E7FBE1] px-6 py-3">
            <img src={require('./assets/icn-plan-green.svg')} alt="" />
            <div className="rb-text-11 mt-3 text-center font-semibold">Подобрать квартиру</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
