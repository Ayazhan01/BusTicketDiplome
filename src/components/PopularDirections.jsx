import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useRef } from 'react';

const PopularDirections = () => {
  const directions = [
    {
      from: 'Киев',
      to: 'Краков',
      price: 'от 700 грн',
      image: '/almaty-astana.jpg',
    },
    {
      from: 'Львов',
      to: 'Варшава',
      price: 'от 650 грн',
      image: '/almaty-astana.jpg',
    },
    {
      from: 'Одесса',
      to: 'Будапешт',
      price: 'от 900 грн',
      image: '/almaty-astana.jpg',
    },
    {
      from: 'Харьков',
      to: 'Прага',
      price: 'от 850 грн',
      image: '/almaty-astana.jpg',
    },
  ];

  const swiperRef = useRef(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', (swiper) => {
        activeIndexRef.current = swiper.activeIndex;
      });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between font-sans relative">
      <div className="w-full lg:w-1/2 relative z-10">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="rounded-lg overflow-hidden"
        >
          {directions.map((dir, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
                <img
                  src={dir.image}
                  alt={`${dir.from} - ${dir.to}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-xl font-bold text-white">
                    {dir.from} - {dir.to}
                  </div>
                  <div className="text-red-300 font-medium mt-1">
                    {dir.price}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Пагинация точками */}
        <div className="custom-pagination flex justify-center gap-2 absolute bottom-4 left-0 right-0 z-10"></div>
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
        <div className="text-2xl lg:text-5xl font-bold uppercase tracking-wide flex flex-col">
          Популярные <span className="text-red-600">направления</span>
        </div>
        
        <div className="text-xl mt-4 font-semibold text-gray-800">
          {directions[activeIndexRef.current]?.from} - {directions[activeIndexRef.current]?.to}
        </div>
        <div className="text-red-600 font-bold text-lg mt-2">
          {directions[activeIndexRef.current]?.price}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors">
            Выбрать
          </button>
          <button className="border border-red-600 text-red-600 hover:text-red-700 hover:border-red-700 font-semibold py-3 px-8 rounded-lg transition-colors">
            Смотреть весь список
          </button>
        </div>
      </div>

      {/* Кнопки навигации */}
      <div className="swiper-prev absolute left-4 bottom-4 lg:left-auto lg:right-24 lg:bottom-8 cursor-pointer z-10 text-white bg-gray-600 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors">
        ❮
      </div>
      <div className="swiper-next absolute right-4 bottom-4 lg:right-8 lg:bottom-8 cursor-pointer z-10 text-white bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors">
        ❯
      </div>
    </div>
  );
};

export default PopularDirections;