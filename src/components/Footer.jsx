// src/components/Footer.jsx
import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 p-6 mt-10 px-20">

        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2025 BusTickets. Все права защищены.</p>
          <div className="space-x-4">
            <Link to="/terms" className="hover:underline">Условия</Link>
            <Link to="/privacy" className="hover:underline">Политика</Link>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;