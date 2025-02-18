import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleDownloadTicket = () => {
    alert("Ваш билет загружен!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-6 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Ваш билет успешно оформлен!</h1>
        <p className="text-gray-600 mb-6">Вы можете скачать билет или получить его на email.</p>

        {/* Информация о рейсе */}
        <div className="bg-gray-200 p-4 rounded-lg text-left mb-6">
          <p><span className="font-semibold">Маршрут:</span> Алматы → Астана</p>
          <p><span className="font-semibold">Дата и время:</span> 20 февраля, 14:00</p>
          <p><span className="font-semibold">Место:</span> 12A</p>
          <p><span className="font-semibold">Цена:</span> 8 500 ₸</p>
        </div>

        {/* Кнопки */}
        <button
          onClick={handleDownloadTicket}
          className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 mb-4"
        >
          Скачать билет
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-full p-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
        >
          На главную
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
