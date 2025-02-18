
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-orange-500">BusTickets</h1>
    <nav>
      <Link to="/search" className="text-gray-700 hover:text-orange-500 px-4">Найти билеты</Link>
      <Link to="/profile" className="text-gray-700 hover:text-orange-500 px-4">Личный кабинет</Link>
      <Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded">Войти</Link>
    </nav>
  </header>
  );
};

export default Header;
