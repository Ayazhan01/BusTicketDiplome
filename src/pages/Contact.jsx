const Contact = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start p-20">
      {/* Карта на заднем фоне */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372170.03260391665!2d76.62286574065635!3d43.218331840980284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668fad986d76!2z0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1740086284308!5m2!1sru!2skz"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Контент с контактами (поверх карты) */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg max-w-lg w-full ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Контакты</h1>
        <p className="text-lg">📍 Адрес: г. Алматы, ул. Абая, 45</p>
        <p className="text-lg">
          📞 Телефон: <a href="tel:+77001234567" className="text-blue-500 hover:underline">+7 (700) 123-45-67</a>
        </p>
        <p className="text-lg">
          ✉ Email: <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a>
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Напишите нам</h2>
        <form className="mt-4 space-y-4">
          <input type="text" placeholder="Ваше имя" className="w-full p-3 border rounded-lg" required />
          <input type="email" placeholder="Ваш email" className="w-full p-3 border rounded-lg" required />
          <textarea placeholder="Ваше сообщение" className="w-full p-3 border rounded-lg h-32" required></textarea>
          <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
