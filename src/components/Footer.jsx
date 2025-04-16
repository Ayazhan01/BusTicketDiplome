import { FaPhone, FaEnvelope, FaClock, FaBus } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-50 px-4 md:px-20 py-12 w-full border-t border-gray-200">
    
        {/* Основной контент */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* О компании */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <FaBus className="text-red-600 text-2xl mr-3" />
              <h1 className="text-2xl font-bold text-gray-800">АВТОБУСБИЛЕТ.KZ</h1>
            </div>
            <p className="text-gray-600 mb-4">
              Крупнейший онлайн-сервис по продаже автобусных билетов в Казахстане. 
              Мы сотрудничаем с ведущими автобусными перевозчиками страны, 
              предлагая вам удобный способ бронирования билетов в любом направлении.
            </p>
            <div className="flex space-x-4">
              <img src="/public/visa.svg" alt="Visa" className="h-8" />
              <img src="/public/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
              <img src="/public/kaspi.png" alt="Kaspi" className="h-8" />
            </div>
          </div>

          {/* Клиентам */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
              КЛИЕНТАМ
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition">Как купить билет</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition">Правила перевозки</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition">Возврат билетов</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition">Частые вопросы</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition">Договор оферты</a></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
              КОНТАКТЫ
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaPhone className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Колл-центр:</p>
                  <p className="text-gray-600">+7 (727) 123-45-67</p>
                  <p className="text-gray-600">+7 (701) 765-43-21</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Email:</p>
                  <p className="text-gray-600">info@avtobusbilet.kz</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Режим работы:</p>
                  <p className="text-gray-600">Круглосуточно, без выходных</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Подписка на новости */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-gray-800 mb-1">ПОДПИСКА НА АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</h3>
              <p className="text-gray-600">Получайте информацию о скидках и новых маршрутах</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent flex-grow"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-r-lg transition-colors whitespace-nowrap">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 AvtobusBilet.kz - Все права защищены
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-red-600 transition">
              <span className="text-sm">Политика конфиденциальности</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600 transition">
              <span className="text-sm">Условия использования</span>
            </a>
          </div>
        </div>
 
    </div>
  );
};

export default Footer;