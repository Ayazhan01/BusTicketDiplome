const About = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-20">
      <div className=" w-full bg-white p-10 rounded-xl shadow-lg flex flex-col md:flex-row">
        {/* Блок с изображением */}
        <div className="md:w-1/3 h-full mb-6 md:mb-0 flex justify-center items-center">
          <img
            src="/public/about.jpg"
            alt="О компании"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Блок с текстом */}
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">О компании</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Наша компания предоставляет удобный и надежный сервис для покупки
            билетов на междугородние автобусы. Мы работаем с ведущими
            перевозчиками, чтобы предложить вам лучшие маршруты по доступным ценам.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Почему выбирают нас?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Быстрое и удобное бронирование билетов.</li>
            <li>Широкий выбор маршрутов и перевозчиков.</li>
            <li>Безопасные и удобные способы оплаты.</li>
            <li>Круглосуточная поддержка клиентов.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">Контакты</h2>
          <p className="text-gray-700">
            📍 Адрес: г. Алматы, ул. Достык, 150 <br />
            📞 Телефон: +7 (777) 123-45-67 <br />
            ✉ Email: support@biletbus.kz
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
