import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import BusSearchForm from "../components/BusSearchForm";

function HomePage() {

  const [searchResults, setSearchResults] = useState(null);
  return (
    <div className="min-h-screen bg-white md:px-20 py-10">
      <section className="flex items-center justify-between ">
        <div
          className="flex flex-col max-w-2/4 gap-6"
          style={{
            backgroundImage: "url(public/1.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% auto",
          }}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-center flex flex-col items-center space-y-3">
            <IoTicketOutline />
            <span className="text-balck">АВТОБУСНЫЕ</span>
            <span className="text-red-500">БИЛЕТЫ</span>
          </h1>

          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-600">
            На нашем сайте вы найдете обширный выбор перевозчиков, которые
            предлагают множество рейсов по самым различным направлениям по
            Европе, преимущественно – в Польшу, Германию и Украину.
          </p>

          <div className="border-t border-gray-300 my-8"></div>
        </div>

        

        <BusSearchForm/>
      </section>

  

      {/* Популярные маршруты */}
      <section className="p-12 text-center mb-20">
        <h2 className="text-4xl font-bold mb-10">Популярные маршруты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              city: "Алматы - Астана",
              price: "от 5000 тг",
              img: "/public/almaty-astana.jpg",
            },
            {
              city: "Шымкент - Караганда",
              price: "от 4500 тг",
              img: "/public/home.jpg",
            },
            {
              city: "Костанай - Павлодар",
              price: "от 6000 тг",
              img: "/public/home1.jpg",
            },
          ].map((route, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={route.img}
                alt={route.city}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-3">{route.city}</h3>
              <p className="text-gray-600">{route.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Преимущества сервиса (оранжевый фон) */}
      <section className="p-12 bg-orange-500 text-white text-center rounded-lg mb-20">
        <h2 className="text-4xl font-bold mb-10">Почему выбирают нас?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Низкие цены",
              desc: "Лучшие тарифы на автобусные билеты",
            },
            {
              title: "Удобный поиск",
              desc: "Простая и быстрая система бронирования",
            },
            {
              title: "Надежность",
              desc: "Работаем только с проверенными перевозчиками",
            },
          ].map((adv, index) => (
            <div
              key={index}
              className="p-6 bg-white text-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{adv.title}</h3>
              <p className="mt-2">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Как это работает? (серый фон) */}
      <section className="p-12 bg-gray-200 text-center rounded-lg mb-20">
        <h2 className="text-4xl font-bold mb-10">Как забронировать билет?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "Выберите маршрут",
              desc: "Укажите откуда и куда вы хотите поехать",
            },
            { step: "Оплатите билет", desc: "Оплатите удобным способом" },
            {
              step: "Получите билет",
              desc: "Электронный билет придёт на вашу почту",
            },
          ].map((step, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{step.step}</h3>
              <p className="mt-2 text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Отзывы клиентов (иконки людей) */}
      {/* Отзывы клиентов */}
      <section className="p-16 text-center mb-20">
        <h2 className="text-4xl font-bold mb-10">Отзывы наших клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              name: "Анна",
              review: "Очень удобный сервис! Все быстро и просто.",
            },
            { name: "Игорь", review: "Нашёл билет за минуту, рекомендую!" },
            {
              name: "Марина",
              review: "Отличные цены и хороший выбор маршрутов!",
            },
            {
              name: "Дмитрий",
              review: "Теперь всегда бронирую билеты онлайн!",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-md flex items-center"
            >
              <FaUserCircle className="text-gray-400 text-6xl mr-6" />
              <div>
                <p className="italic text-lg text-gray-700">
                  "{review.review}"
                </p>
                <h3 className="text-xl font-semibold mt-3">— {review.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Подписка на рассылку */}
      <section className="p-12 bg-orange-500 text-white text-center rounded-lg mb-20">
        <h2 className="text-4xl font-bold mb-6">Хотите получать скидки?</h2>
        <p className="mb-6">
          Подпишитесь на нашу рассылку и будьте в курсе всех акций!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Введите ваш email"
            className="p-4 rounded-l-lg w-1/2 text-gray-800 bg-white  border-2 border-amber-600"
          />
          <button className="bg-white text-orange-500 px-6 py-4 rounded-r-lg hover:bg-gray-200 border-2 border-amber-600">
            Подписаться
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
