import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";

const PopularDirections = () => {
  const directions = [
    {
      from: "Киев",
      to: "Краков",
      price: "от 700 грн",
      image: "/home.jpg",
    },
    {
      from: "Львов",
      to: "Варшава",
      price: "от 650 грн",
      image: "/home.jpg",
    },
    {
      from: "Одесса",
      to: "Будапешт",
      price: "от 900 грн",
      image: "/home.jpg",
    },
    {
      from: "Харьков",
      to: "Прага",
      price: "от 850 грн",
      image: "/home.jpg",
    },
  ];

  const swiperRef = useRef(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", (swiper) => {
        activeIndexRef.current = swiper.activeIndex;
      });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center justify-between font-sans relative">
      {" "}
      {/* Removed h-screen */}
      <div className="w-full lg:w-1/2 relative z-10">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className=" overflow-hidden"
        >
          {directions.map((dir, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-[380px] " style={{
                    backgroundImage: "url(public/bg.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "500px auto",
                  }}>
                {/* Обертка картинки и текста */}
                <div
                  className="relative overflow-hidden z-10 h-full"
                 
                >
                  <img
                    src={dir.image}
                    alt={`${dir.from} - ${dir.to}`}
                    className="w-full h-full object-cover border-gray-50 shadow"
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Пагинация точками
        <div className="custom-pagination flex justify-center gap-2 absolute bottom-4 left-0 right-0 z-10 text-red-500"></div> */}
      </div>
      <div
        className="w-full lg:w-1/2 text-center lg:text-left py-8 lg:py-0" // Added some vertical padding
        style={{
          backgroundImage: "url(public/2.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "60% auto", // Changed to 'contain' to see the whole image
        }}
      >
        <div className="text-2xl lg:text-5xl font-bold uppercase tracking-wide flex flex-col">
          Популярные <span className="text-red-600">направления</span>
        </div>
        <div className="flex items-center justify-center lg:justify-between mt-4">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-3xl mt-4 font-semibold text-gray-800">
              {directions[activeIndexRef.current]?.from} -{" "}
              {directions[activeIndexRef.current]?.to}
            </div>
            <div className="text-red-600 font-bold text-2xl  mt-2">
              {directions[activeIndexRef.current]?.price}
            </div>
          </div>
          {/* Кнопки навигации */}
          <div className="flex items-center gap-3 ml-4 lg:ml-8">
            <div className="swiper-prev cursor-pointer z-10 text-white bg-gray-600 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors">
              ❮
            </div>
            <div className="swiper-next cursor-pointer z-10 text-white bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors">
              ❯
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start text-xl">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors">
            Выбрать
          </button>
          <button className="border border-red-600 text-red-600 hover:text-red-700 hover:border-red-700 font-semibold py-3 px-8 rounded-lg transition-colors">
            Смотреть весь список
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularDirections;
