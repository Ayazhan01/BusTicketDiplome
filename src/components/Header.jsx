// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaTimes, FaSignInAlt } from "react-icons/fa";
// import { BiSupport } from "react-icons/bi";
// import { MdOutlineMenu } from "react-icons/md";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Закрытие меню при клике на ссылку
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <header className="bg-white px-4 md:px-20 py-6 flex justify-between items-center relative w-full shadow-2xs">
//       {/* Левая часть: логотип + кнопка меню */} 
//       <div className="flex items-center justify-between md:justify-baseline md:gap-6">
//         <Link to="/" className="text-2xl font-bold text-red-500">
//           <span className="text-black">BUS</span> TicKet
//         </Link>
//       </div>

//       {/* Правая часть */}
//       <div className="hidden md:flex items-center space-x-6 ">
//         <Link
//           to="/support"
//           className="hidden md:flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
//         >
//           <BiSupport className="text-red-500 text-lg"  />
//           <span className="text-lg">
//             Служба поддержки
//           </span>
//         </Link>

//         <Link
//           to="/login"
//           className="flex items-center hover:text-red-600 text-lg"
//         >
//           <FaSignInAlt className="text-red-500 mr-2" /> Личный кабинет
//         </Link>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center gap-2 text-gray-700 text-lg focus:outline-none"
//           aria-label="Меню"
//           aria-expanded={isOpen}
//         >
//           {isOpen ? (
//             <FaTimes className="text-red-500 text-lg"/>
//           ) : (
//             <MdOutlineMenu className="text-red-500 text-lg" />
//           )}
//           Меню
//         </button>
//       </div>

//       {/* Выпадающее меню с анимацией */}
//       <div
//         className={`absolute top-full left-0 w-full bg-white shadow-md z-50 transition-all duration-300 overflow-hidden ${
//           isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="container mx-auto py-6">
//           <ul className="flex flex-wrap gap-6 text-gray-800">
//             <li>
//               <Link
//                 className="hover:text-red-500 text-xl transition-colors block "
//                 to="/"
//                 onClick={closeMenu}
//               >
//                 Главная
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-red-500 text-xl transition-colors block"
//                 to="/about"
//                 onClick={closeMenu}
//               >
//                 О компании
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-red-500 text-xl transition-colors block "
//                 to="/contacts"
//                 onClick={closeMenu}
//               >
//                 Контакты
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-red-500 text-xl transition-colors block "
//                 to="/routes"
//                 onClick={closeMenu}
//               >
//                 Маршруты
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-red-500 text-xl transition-colors block "
//                 to="/schedule"
//                 onClick={closeMenu}
//               >
//                 Расписание
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-red-500 text-xl transition-colors block "
//                 to="/support"
//                 onClick={closeMenu}
//               >
//                 Поддержка
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaSignInAlt, FaUser, FaBus } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  const menuRef = useRef(null);
  const location = useLocation();

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Закрытие меню при смене страницы
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Эффект для добавления тени при скролле
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white px-4 md:px-20 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Левая часть: логотип + кнопка меню */}
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-2xl font-bold text-red-500 flex items-center"
        >
          <FaBus className="mr-2" />
          <span className="text-black">BUS</span>TicKet
        </Link>

        {/* Кнопка меню для мобильных */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Меню"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FaTimes className="text-red-500 text-xl" />
          ) : (
            <MdOutlineMenu className="text-red-500 text-xl" />
          )}
        </button>
      </div>

      {/* Правая часть для десктопа */}
      <div className="hidden md:flex items-center gap-6">
        <nav className="flex items-center gap-6">
          <Link
            to="/contacts"
            className="text-gray-700 hover:text-red-500 transition-colors font-medium"
          >
            Контакты
          </Link>
          {/* <Link
            to="/schedule"
            className="text-gray-700 hover:text-red-500 transition-colors font-medium"
          >
            Расписание
          </Link> */}
          <Link
            to="/about"
            className="text-gray-700 hover:text-red-500 transition-colors font-medium"
          >
            О нас
          </Link>
        </nav>

        <div className="flex items-center gap-4 ml-4">
          <button
            className="relative text-gray-700 hover:text-red-500 transition-colors"
            aria-label="Уведомления"
          >
            <IoMdNotificationsOutline className="text-xl" />
            {hasNotifications && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>

          <Link
            to="/support"
            className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
          >
            <BiSupport className="text-lg" />
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <FaUser className="text-sm" />
            <span>Войти</span>
          </Link>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        ref={menuRef}
        className={`fixed md:hidden top-16 left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col gap-4 text-gray-800">
            <li>
              <Link
                className="flex items-center gap-3 hover:text-red-500 text-lg transition-colors py-3 px-2 rounded-lg hover:bg-red-50"
                to="/"
                onClick={closeMenu}
              >
                <FaBus className="text-red-500" />
                Главная
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-3 hover:text-red-500 text-lg transition-colors py-3 px-2 rounded-lg hover:bg-red-50"
                to="/routes"
                onClick={closeMenu}
              >
                <FaBus className="text-red-500" />
                Маршруты
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-3 hover:text-red-500 text-lg transition-colors py-3 px-2 rounded-lg hover:bg-red-50"
                to="/schedule"
                onClick={closeMenu}
              >
                <FaBus className="text-red-500" />
                Расписание
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-3 hover:text-red-500 text-lg transition-colors py-3 px-2 rounded-lg hover:bg-red-50"
                to="/about"
                onClick={closeMenu}
              >
                <FaBus className="text-red-500" />
                О компании
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-3 hover:text-red-500 text-lg transition-colors py-3 px-2 rounded-lg hover:bg-red-50"
                to="/contacts"
                onClick={closeMenu}
              >
                <FaBus className="text-red-500" />
                Контакты
              </Link>
            </li>
            <li className="mt-4 border-t pt-4">
              <Link
                className="flex items-center gap-3 hover:text-red-500 text-lg transition-colors py-3 px-2 rounded-lg hover:bg-red-50"
                to="/support"
                onClick={closeMenu}
              >
                <BiSupport className="text-red-500" />
                Поддержка
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-3 hover:text-red-500 text-lg transition-colors py-3 px-2 rounded-lg hover:bg-red-50"
                to="/profile"
                onClick={closeMenu}
              >
                <FaSignInAlt className="text-red-500" />
                Войти
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;