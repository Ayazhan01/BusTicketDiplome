import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaSignInAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Закрытие меню при клике на ссылку
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white px-4 md:px-20 py-6 flex justify-between items-center relative w-full shadow-2xs">
      {/* Левая часть: логотип + кнопка меню */} 
      <div className="flex items-center justify-between md:justify-baseline md:gap-6">
        <Link to="/" className="text-2xl font-bold text-red-500">
          <span className="text-black">BUS</span> TicKet
        </Link>
      </div>

      {/* Правая часть */}
      <div className="hidden md:flex items-center space-x-6 ">
        <Link
          to="/support"
          className="hidden md:flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
        >
          <BiSupport className="text-red-500 text-lg"  />
          <span className="text-lg">
            Служба поддержки
          </span>
        </Link>

        <Link
          to="/login"
          className="flex items-center hover:text-red-600 text-lg"
        >
          <FaSignInAlt className="text-red-500 mr-2" /> Личный кабинет
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-gray-700 text-lg focus:outline-none"
          aria-label="Меню"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FaTimes className="text-red-500 text-lg"/>
          ) : (
            <MdOutlineMenu className="text-red-500 text-lg" />
          )}
          Меню
        </button>
      </div>

      {/* Выпадающее меню с анимацией */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md z-50 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto py-6">
          <ul className="flex flex-wrap gap-6 text-gray-800">
            <li>
              <Link
                className="hover:text-red-500 text-xl transition-colors block "
                to="/"
                onClick={closeMenu}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-500 text-xl transition-colors block"
                to="/about"
                onClick={closeMenu}
              >
                О компании
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-500 text-xl transition-colors block "
                to="/contacts"
                onClick={closeMenu}
              >
                Контакты
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-500 text-xl transition-colors block "
                to="/routes"
                onClick={closeMenu}
              >
                Маршруты
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-500 text-xl transition-colors block "
                to="/schedule"
                onClick={closeMenu}
              >
                Расписание
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-500 text-xl transition-colors block "
                to="/support"
                onClick={closeMenu}
              >
                Поддержка
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;