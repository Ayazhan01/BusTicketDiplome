// // src/components/Footer.jsx
// import { Link } from "react-router-dom";
// const Footer = () => {
//     return (
//       <footer className="bg-gray-800 text-gray-300 p-6 mt-10 px-20">

//         <div className="container mx-auto flex justify-between items-center">
//           <p>&copy; 2025 BusTickets. Все права защищены.</p>
//           <div className="space-x-4">
//             <Link to="/terms" className="hover:underline">Условия</Link>
//             <Link to="/privacy" className="hover:underline">Политика</Link>
//           </div>
//         </div>
//       </footer>
//     );
//   };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="bg-white px-4 md:px-20 py-6 flex justify-between items-center relative w-full shadow-2xs ">
      <div className="mx-auto">
        {/* Основной текст */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">АВТОБУСНЫЕ БИЛЕТЫ ОНЛАЙН</h1>
          <p className="mb-4">
            Сегодня поездки по миру доступны каждому благодаря наличию интернета и огромному количеству предложений по автобусным перевозкам. Каждый выбирает для себя, что предпочтительней – отправиться в путешествие на самолете, на поезде, на автобусе или на автомобиле. Однако автобусные пассажирские перевозки обладают определенными преимуществами – доступными ценами на билеты и высоким уровнем комфорта, что дополняется быстротой и безопасностью передвижения.
          </p>
          
          <h2 className="text-xl font-bold mb-4">БРОНИРОВАНИЕ И ПОКУПКА БИЛЕТОВ НА АВТОБУСЫ</h2>
          <p className="mb-4">
            В наше время сверхскоростей и интернета для покупки билета недопустимо тратить драгоценное время на проезд в транспорте и стояние в очередях в кассу автовокзала, если есть возможность купить автобусные билеты онлайн, потратив на это всего несколько минут. Наш сервис бронирования и продажи билетов онлайн Combiway предоставляет вам возможность выбрать рейс, забронировать и приобрести билеты на автобусы онлайн, сэкономив не только свое время, но и деньги.
          </p>
          
          <h2 className="text-xl font-bold mb-4">ОПЛАТА БИЛЕТОВ ИЗ УКРАИНЫ И ИЗ ПОЛЬШИ</h2>
          <p className="mb-4">
            Наше неоспоримое преимущество - это легкость оплаты билетов как из Украины, так и из Польши. Вы можете выбрать любой удобный вам способ, и в два счета оплатить заказ.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold">Наличными или картой:</h3>
              <ul className="list-disc pl-5">
                <li>в сети супермаркетов «Zabka» и «Freihmarket»;</li>
                <li>через приложения Моje Rachunki и Kantor Polski.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Денежным переводом:</h3>
              <ul className="list-disc pl-5">
                <li>в банке или на почте;</li>
                <li>через mPay i SkyCash.</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold">Наличными:</h3>
            <p>в офисе компании (см. Контакты).</p>
          </div>
          
          <p className="font-semibold mb-8">Принимаются карты любого банка, с гривнами и злотыми!</p>
        </div>

        {/* Подписка на новости */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">ХОТИТЕ ПОЛУЧАТЬ НОВОСТИ ОБ АКЦИОННЫХ ПРЕДЛОЖЕНИЯХ И СКИДКАХ?</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Введите ваш электронный адрес" 
              className="px-4 py-2 border border-gray-300 rounded flex-grow"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              подписка на новости
            </button>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">КЛИЕНТАМ</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-blue-600">Договор оферты</a></li>
              <li><a href="#" className="hover:text-blue-600">Правила перевозки</a></li>
              <li><a href="#" className="hover:text-blue-600">Как купить билет</a></li>
              <li><a href="#" className="hover:text-blue-600">Выкуп бронирования</a></li>
              <li><a href="#" className="hover:text-blue-600">Правила возврата</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">РЕЖИМ РАБОТЫ</h3>
            <p className="font-semibold">Call-центр:</p>
            <p className="mb-2">Ежедневно с 09:00 до 22:00</p>
            <p className="font-semibold">Работа офисов:</p>
            <p>Ежедневно с 09:00 до 22:00</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">КОНТАКТЫ</h3>
            <p className="font-semibold">Польша:</p>
            <p className="mb-2">+48-12-333-71-65</p>
            <p className="font-semibold">Украина:</p>
            <p>+38 (095) 292-04-02</p>
            <p>+38 (067) 320-04-02</p>
            <p>+38 (073) 374-05-20</p>
          </div>
        </div>

        {/* Логотип в самом низу */}
        <div className="mt-8 pt-4 border-t border-gray-300">
          <p className="text-center text-gray-600">НАШИ COLL.CETM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;