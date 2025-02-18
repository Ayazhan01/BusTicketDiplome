import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Вы вышли из аккаунта!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Личный кабинет</h1>

        {/* Данные пользователя */}
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <p><span className="font-semibold">Имя:</span> Иван Иванов</p>
          <p><span className="font-semibold">Email:</span> ivan@example.com</p>
          <p><span className="font-semibold">Телефон:</span> +7 777 123 45 67</p>
        </div>

        {/* История поездок */}
        <h2 className="text-lg font-semibold text-gray-700 mb-2">История поездок</h2>
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <p><span className="font-semibold">Маршрут:</span> Алматы → Астана</p>
          <p><span className="font-semibold">Дата:</span> 12 февраля 2025</p>
          <p><span className="font-semibold">Место:</span> 5B</p>
        </div>

        {/* Кнопки */}
        <button
          onClick={() => alert("Функция редактирования пока недоступна")}
          className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 mb-4"
        >
          Редактировать профиль
        </button>
        <button
          onClick={handleLogout}
          className="w-full p-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Profile;
