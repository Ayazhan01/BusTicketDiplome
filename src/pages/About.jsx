const About = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg">
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
    );
  };
  
  export default About;
  