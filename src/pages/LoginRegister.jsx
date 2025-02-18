import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Вы вошли в аккаунт!" : "Аккаунт создан!");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {isLogin ? "Вход" : "Регистрация"}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Введите email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Пароль</label>
            <input
              type="password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Введите пароль"
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700">Подтвердите пароль</label>
              <input
                type="password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Повторите пароль"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 mb-4"
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>

        <p className="text-center text-gray-600">
          {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
          <button onClick={toggleForm} className="text-orange-500 underline">
            {isLogin ? "Создать аккаунт" : "Войти"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
