import { FaUserCircle } from "react-icons/fa";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 px-20">
      {/* Поисковая форма */}
      <section
        className="p-12 mx-auto rounded-2xl flex flex-col justify-end mb-20"
        style={{
          backgroundImage: "url('/public/home1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
        }}
      >
        <h2 className="text-7xl font-bold text-white text-center drop-shadow-lg">
          Поиск автобусных билетов
        </h2>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md flex text-center">
          <input type="text" placeholder="Откуда" className="border border-amber-600 p-3 rounded-l-xl w-full" />
          <input type="text" placeholder="Куда" className="border  border-amber-600  p-3 w-full" />
          <input type="date" className="border  border-amber-600  p-3 w-full" />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-xl ">
            Найти
          </button>
        </div>
      </section>

      {/* Популярные маршруты */}
      <section className="p-12 text-center mb-20">
        <h2 className="text-4xl font-bold mb-10">Популярные маршруты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { city: "Алматы - Астана", price: "от 5000 тг", img: "/public/almaty-astana.jpg" },
            { city: "Шымкент - Караганда", price: "от 4500 тг", img: "/public/home.jpg" },
            { city: "Костанай - Павлодар", price: "от 6000 тг", img: "/public/home1.jpg" },
          ].map((route, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <img src={route.img} alt={route.city} className="w-full h-40 object-cover rounded-lg" />
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
            { title: "Низкие цены", desc: "Лучшие тарифы на автобусные билеты" },
            { title: "Удобный поиск", desc: "Простая и быстрая система бронирования" },
            { title: "Надежность", desc: "Работаем только с проверенными перевозчиками" },
          ].map((adv, index) => (
            <div key={index} className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
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
            { step: "Выберите маршрут", desc: "Укажите откуда и куда вы хотите поехать" },
            { step: "Оплатите билет", desc: "Оплатите удобным способом" },
            { step: "Получите билет", desc: "Электронный билет придёт на вашу почту" },
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
      { name: "Анна", review: "Очень удобный сервис! Все быстро и просто." },
      { name: "Игорь", review: "Нашёл билет за минуту, рекомендую!" },
      { name: "Марина", review: "Отличные цены и хороший выбор маршрутов!" },
      { name: "Дмитрий", review: "Теперь всегда бронирую билеты онлайн!" },
    ].map((review, index) => (
      <div key={index} className="p-8 bg-white rounded-lg shadow-md flex items-center">
        <FaUserCircle className="text-gray-400 text-6xl mr-6" />
        <div>
          <p className="italic text-lg text-gray-700">"{review.review}"</p>
          <h3 className="text-xl font-semibold mt-3">— {review.name}</h3>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Подписка на рассылку */}
      <section className="p-12 bg-orange-500 text-white text-center rounded-lg mb-20">
        <h2 className="text-4xl font-bold mb-6">Хотите получать скидки?</h2>
        <p className="mb-6">Подпишитесь на нашу рассылку и будьте в курсе всех акций!</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Введите ваш email" className="p-4 rounded-l-lg w-1/2 text-gray-800 bg-white  border-2 border-amber-600" />
          <button className="bg-white text-orange-500 px-6 py-4 rounded-r-lg hover:bg-gray-200 border-2 border-amber-600">
            Подписаться
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
