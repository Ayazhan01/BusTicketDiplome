const Contact = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Контакты</h1>
  
          <div className="space-y-4">
            <p className="text-lg">
              📍 Адрес: г. Алматы, ул. Абая, 45
            </p>
            <p className="text-lg">
              📞 Телефон: <a href="tel:+77001234567" className="text-blue-500 hover:underline">+7 (700) 123-45-67</a>
            </p>
            <p className="text-lg">
              ✉️ Email: <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a>
            </p>
          </div>
  
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Напишите нам</h2>
  
          <form className="mt-4 space-y-4">
            <input type="text" placeholder="Ваше имя" className="w-full p-3 border rounded-lg" required />
            <input type="email" placeholder="Ваш email" className="w-full p-3 border rounded-lg" required />
            <textarea placeholder="Ваше сообщение" className="w-full p-3 border rounded-lg h-32" required></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Отправить
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  