// import { useState } from 'react';

// const BusSearchForm = () => {
//   const [formData, setFormData] = useState({
//     from: '',
//     to: '',
//     date: '',
//     passengers: '1 пассажир',
//     promoCode: ''
//   });
  
//   const [searchResults, setSearchResults] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Моковая функция поиска автобусов
//   const mockSearchBuses = async (searchParams) => {
//     // Имитация задержки API
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     // Генерация моковых данных для автобусов
//     const mockBuses = [];
//     const busCompanies = ['Сарыарка', 'Казахстан Темир Жолы', 'Экспресс', 'Байконур', 'Жетысу'];
//     const busTypes = ['Обычный', 'Комфорт', 'VIP'];
//     const cities = {
//       from: searchParams.from || 'Алматы',
//       to: searchParams.to || 'Нур-Султан'
//     };
    
//     for (let i = 0; i < 5; i++) {
//       const randomCompany = busCompanies[Math.floor(Math.random() * busCompanies.length)];
//       const randomType = busTypes[Math.floor(Math.random() * busTypes.length)];
//       const basePrice = Math.floor(Math.random() * 10000) + 3000;
//       const durationHours = Math.floor(Math.random() * 10) + 5;
      
//       mockBuses.push({
//         id: `bus-${i + 1}`,
//         company: randomCompany,
//         busNumber: `${randomCompany.substring(0, 2).toUpperCase()}${Math.floor(Math.random() * 900) + 100}`,
//         departure: {
//           city: cities.from,
//           station: `${cities.from} автовокзал`,
//           time: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
//         },
//         arrival: {
//           city: cities.to,
//           station: `${cities.to} автовокзал`,
//           time: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
//         },
//         duration: `${durationHours}ч ${Math.floor(Math.random() * 60)}м`,
//         type: randomType,
//         price: basePrice - (searchParams.promoCode ? basePrice * 0.1 : 0), // 10% скидка если есть промокод
//         seatsAvailable: Math.floor(Math.random() * 15) + 5,
//         amenities: randomType === 'VIP' ? ['Wi-Fi', 'Кондиционер', 'Розетки', 'TV'] : 
//                    randomType === 'Комфорт' ? ['Кондиционер', 'Розетки'] : ['Кондиционер']
//       });
//     }
    
//     return {
//       success: true,
//       data: mockBuses.sort((a, b) => a.price - b.price)
//     };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     try {
//       const results = await mockSearchBuses(formData);
//       setSearchResults(results.data);
//     } catch (error) {
//       console.error('Ошибка поиска:', error);
//       setSearchResults([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Популярные города Казахстана для подсказок
//   const popularCities = [
//     'Алматы', 'Нур-Султан', 'Шымкент', 'Актобе', 'Караганда',
//     'Тараз', 'Павлодар', 'Усть-Каменогорск', 'Семей', 'Костанай',
//     'Кызылорда', 'Уральск', 'Петропавловск', 'Атырау', 'Актау'
//   ];

//   return (
//     <div className="max-w-4xl mx-auto">
//       <form onSubmit={handleSubmit}>
//         <div className="bg-white rounded-lg shadow-lg p-6 items-end flex">
//           <div className="grid grid-cols-1 gap-4 w-full">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Откуда
//               </label>
//               <input
//                 type="text"
//                 name="from"
//                 placeholder="Город отправления"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
//                 value={formData.from}
//                 onChange={handleChange}
//                 list="cities-from"
//               />
//               <datalist id="cities-from">
//                 {popularCities.map(city => (
//                   <option key={`from-${city}`} value={city} />
//                 ))}
//               </datalist>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Куда
//               </label>
//               <input
//                 type="text"
//                 name="to"
//                 placeholder="Город назначения"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
//                 value={formData.to}
//                 onChange={handleChange}
//                 list="cities-to"
//               />
//               <datalist id="cities-to">
//                 {popularCities.map(city => (
//                   <option key={`to-${city}`} value={city} />
//                 ))}
//               </datalist>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Дата отправления
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
//                 value={formData.date}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Пассажиры
//                 </label>
//                 <select 
//                   name="passengers"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
//                   value={formData.passengers}
//                   onChange={handleChange}
//                 >
//                   <option>1 пассажир</option>
//                   <option>2 пассажира</option>
//                   <option>3 пассажира</option>
//                   <option>4 пассажира</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Промокод
//                 </label>
//                 <input
//                   type="text"
//                   name="promoCode"
//                   placeholder="Введите промокод"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
//                   value={formData.promoCode}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <button 
//               type="submit"
//               className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 mt-4"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Поиск...' : 'НАЙТИ АВТОБУСЫ'}
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Результаты поиска */}
//       {searchResults && (
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Найденные автобусы</h2>
          
//           {searchResults.length === 0 ? (
//             <div className="text-center py-8">
//               <p className="text-gray-600">Автобусов по вашему запросу не найдено</p>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {searchResults.map(bus => (
//                 <div key={bus.id} className="bg-white rounded-lg shadow p-6">
//                   <div className="flex justify-between items-center mb-4">
//                     <div>
//                       <h3 className="font-bold text-lg">{bus.company} {bus.busNumber}</h3>
//                       <p className="text-gray-600">{bus.type} класс</p>
//                       <div className="flex gap-2 mt-2">
//                         {bus.amenities.map((amenity, index) => (
//                           <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
//                             {amenity}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-bold text-xl">{bus.price.toLocaleString()} ₸</p>
//                       <p className="text-sm text-gray-600">{bus.seatsAvailable} мест</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <p className="font-bold">{bus.departure.time}</p>
//                       <p>{bus.departure.city}</p>
//                       <p className="text-sm text-gray-600">{bus.departure.station}</p>
//                     </div>
                    
//                     <div className="text-center">
//                       <p className="text-gray-600">{bus.duration}</p>
//                       <div className="w-32 h-px bg-gray-300 my-2"></div>
//                     </div>
                    
//                     <div className="text-right">
//                       <p className="font-bold">{bus.arrival.time}</p>
//                       <p>{bus.arrival.city}</p>
//                       <p className="text-sm text-gray-600">{bus.arrival.station}</p>
//                     </div>
//                   </div>
                  
//                   <button className="mt-4 w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300">
//                     Забронировать
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusSearchForm;

import { useState } from 'react';

const BusSearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1 пассажир',
    promoCode: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Моковая функция поиска автобусов
  const mockSearchBuses = async (searchParams) => {
    // Имитация задержки API
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Генерация моковых данных для автобусов
    const mockBuses = [];
    const busCompanies = ['Сарыарка', 'Казахстан Темир Жолы', 'Экспресс', 'Байконур', 'Жетысу'];
    const busTypes = ['Обычный', 'Комфорт', 'VIP'];
    const cities = {
      from: searchParams.from || 'Алматы',
      to: searchParams.to || 'Нур-Султан'
    };

    for (let i = 0; i < 5; i++) {
      const randomCompany = busCompanies[Math.floor(Math.random() * busCompanies.length)];
      const randomType = busTypes[Math.floor(Math.random() * busTypes.length)];
      const basePrice = Math.floor(Math.random() * 10000) + 3000;
      const durationHours = Math.floor(Math.random() * 10) + 5;

      mockBuses.push({
        id: `bus-${i + 1}`,
        company: randomCompany,
        busNumber: `${randomCompany.substring(0, 2).toUpperCase()}${Math.floor(Math.random() * 900) + 100}`,
        departure: {
          city: cities.from,
          station: `${cities.from} автовокзал`,
          time: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
        },
        arrival: {
          city: cities.to,
          station: `${cities.to} автовокзал`,
          time: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
        },
        duration: `${durationHours}ч ${Math.floor(Math.random() * 60)}м`,
        type: randomType,
        price: basePrice - (searchParams.promoCode ? basePrice * 0.1 : 0), // 10% скидка если есть промокод
        seatsAvailable: Math.floor(Math.random() * 15) + 5,
        amenities: randomType === 'VIP' ? ['Wi-Fi', 'Кондиционер', 'Розетки', 'TV'] :
                   randomType === 'Комфорт' ? ['Кондиционер', 'Розетки'] : ['Кондиционер']
      });
    }

    return {
      success: true,
      data: mockBuses.sort((a, b) => a.price - b.price)
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const results = await mockSearchBuses(formData);
      onSearch(results.data); // Передаем результаты поиска через пропс
    } catch (error) {
      console.error('Ошибка поиска:', error);
      onSearch([]); // Передаем пустой массив в случае ошибки
    } finally {
      setIsLoading(false);
    }
  };

  // Популярные города Казахстана для подсказок
  const popularCities = [
    'Алматы', 'Нур-Султан', 'Шымкент', 'Актобе', 'Караганда',
    'Тараз', 'Павлодар', 'Усть-Каменогорск', 'Семей', 'Костанай',
    'Кызылорда', 'Уральск', 'Петропавловск', 'Атырау', 'Актау'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg shadow-lg p-6 items-end flex">
          <div className="grid grid-cols-1 gap-4 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Откуда
              </label>
              <input
                type="text"
                name="from"
                placeholder="Город отправления"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={formData.from}
                onChange={handleChange}
                list="cities-from"
              />
              <datalist id="cities-from">
                {popularCities.map(city => (
                  <option key={`from-${city}`} value={city} />
                ))}
              </datalist>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Куда
              </label>
              <input
                type="text"
                name="to"
                placeholder="Город назначения"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={formData.to}
                onChange={handleChange}
                list="cities-to"
              />
              <datalist id="cities-to">
                {popularCities.map(city => (
                  <option key={`to-${city}`} value={city} />
                ))}
              </datalist>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Дата отправления
              </label>
              <input
                type="date"
                name="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Пассажиры
                </label>
                <select
                  name="passengers"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={formData.passengers}
                  onChange={handleChange}
                >
                  <option>1 пассажир</option>
                  <option>2 пассажира</option>
                  <option>3 пассажира</option>
                  <option>4 пассажира</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Промокод
                </label>
                <input
                  type="text"
                  name="promoCode"
                  placeholder="Введите промокод"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={formData.promoCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 mt-4"
              disabled={isLoading}
            >
              {isLoading ? 'Поиск...' : 'НАЙТИ АВТОБУСЫ'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusSearchForm;