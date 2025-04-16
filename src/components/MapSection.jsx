import { FaMapMarkerAlt, FaPhone, FaClock, FaExternalLinkAlt } from 'react-icons/fa';

const MapSeaction = () => {
  // Координаты МУИТ
  const latitude = 43.235095;
  const longitude = 76.909906;

  // Ссылка на полную карту
  const osmUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=17/${latitude}/${longitude}`;

  // Параметры области вокруг точки (bbox) для iframe
  const bbox = {
    left: longitude - 0.005,
    right: longitude + 0.005,
    bottom: latitude - 0.005,
    top: latitude + 0.005,
  };

  const iframeSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox.left},${bbox.bottom},${bbox.right},${bbox.top}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <div className="relative h-screen w-full bg-gray-50 flex flex-col pb-20">
    

 
      <div className="flex-1 relative bg-gray-200">
        <div className="w-full h-full">
            <img src="public/transition.png" className="rotate-180" />
            <iframe
                src={iframeSrc}
                className="w-full h-full text-red-600"
                style={{ border: 0, filter: "grayscale(80%) brightness(1.1) contrast(0.9)",   pointerEvents: "none"  }}
                allowFullScreen
                loading="lazy"
                title="Карта МУИТ"
            ></iframe>
        
        </div>

        {/* Информационная панель */}
        <div className="absolute bottom-6 left-20 z-10 w-96 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-5 border border-gray-200">

          <div className="space-y-3">
          <h1 className="text-4xl uppercase font-bold flex flex-col ">
                Наши
                <span className="text-red-500">Контакты</span>
                <span className=" border-b-2 w-20 mt-3"></span>
              </h1>
            <div className="flex items-start">
              <div className="text-red-500 mt-0.5 mr-3">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-gray-800">ул. Манаса 34/1, Алматы</p>
                <p className="text-sm text-gray-600">Главный корпус, 3 этаж</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-red-500 mt-0.5 mr-3">
                <FaPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-gray-800">+7 (727) 320-00-00</p>
                <p className="text-sm text-gray-600">Приемная комиссия</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-red-500 mt-0.5 mr-3">
                <FaClock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-sm text-gray-600">Сб-Вс: выходной</p>
              </div>
            </div>
          </div>

          <a
            href={osmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
          >
            <FaExternalLinkAlt className="mr-2" />
            Открыть в OpenStreetMap
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapSeaction;
