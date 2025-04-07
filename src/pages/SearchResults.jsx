import { useState } from "react";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [filters, setFilters] = useState({
    date: "",
    time: "",
    company: "",
    price: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const busRoutes = [
    { id: 1, from: "Алматы", to: "Астана", time: "10:00", price: "5000₸", company: "BusLine" },
    { id: 2, from: "Алматы", to: "Шымкент", time: "12:00", price: "7000₸", company: "KazBus" },
    { id: 3, from: "Астана", to: "Караганда", time: "14:00", price: "4000₸", company: "FastBus" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-20 py-6">
      <div className="mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Поиск рейсов</h1>

        {/* Фильтры */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <input type="date" name="date" className="p-2 border rounded-lg" onChange={handleFilterChange} />
          <input type="time" name="time" className="p-2 border rounded-lg" onChange={handleFilterChange} />
          <select name="company" className="p-2 border rounded-lg" onChange={handleFilterChange}>
            <option value="">Все перевозчики</option>
            <option value="BusLine">BusLine</option>
            <option value="KazBus">KazBus</option>
            <option value="FastBus">FastBus</option>
          </select>
          <input type="number" name="price" placeholder="Макс. цена" className="p-2 border rounded-lg" onChange={handleFilterChange} />
        </div>

        {/* Список рейсов */}
        <div className="space-y-4">
          {busRoutes.map((route) => (
            <div key={route.id} className="flex justify-between items-center p-4 bg-gray-50 border rounded-lg shadow-sm">
              <div>
                <p className="text-lg font-semibold">{route.from} → {route.to}</p>
                <p className="text-gray-600">{route.time} | {route.company}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-orange-500">{route.price}</p>
                <Link to="/booking">
                  <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                    Забронировать
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
