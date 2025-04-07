import { Link } from "react-router-dom";
import { FaSearch, FaSignInAlt } from "react-icons/fa"; // Импорт иконок

const Header = () => {
  return (
    <header className="bg-white px-20 py-3 flex justify-between items-center shadow-md">
      {/* Логотип */}
      <Link to="/" className="text-2xl font-bold text-orange-500">
        BusTickets
      </Link>

<div className="flex justify-between space-x-8 font-bold items-center"> 
        
        <Link to="/about" className="text-gray-700 hover:text-orange-500">О компании</Link>
        <Link to="/faq" className="text-gray-700 hover:text-orange-500">FAQ</Link>
        <Link to="/contact" className="text-gray-700 hover:text-orange-500">Контакты</Link>

        </div>
      {/* Навигация */}
      <nav className="flex space-x-6 items-center">
        
       
        <Link to="/search" className="text-gray-700 hover:text-orange-500 flex items-center">
          <FaSearch className="mr-2" /> 
        </Link>
        <Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded flex items-center">
        
          <FaSignInAlt className="mr-2" /> Войти
        </Link>
      </nav>
    </header>
  );
};

export default Header;
