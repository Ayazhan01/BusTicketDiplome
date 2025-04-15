// BusSearchResults.jsx
export const BusSearchResults = ({ results }) => {
    if (!results) return null;
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Найденные автобусы</h2>
        
        {results.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Автобусов по вашему запросу не найдено</p>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map(bus => (
              <div key={bus.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{bus.company} {bus.busNumber}</h3>
                    <p className="text-gray-600">{bus.type} класс</p>
                    <div className="flex gap-2 mt-2">
                      {bus.amenities.map((amenity, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl">{bus.price.toLocaleString()} ₸</p>
                    <p className="text-sm text-gray-600">{bus.seatsAvailable} мест</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">{bus.departure.time}</p>
                    <p>{bus.departure.city}</p>
                    <p className="text-sm text-gray-600">{bus.departure.station}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-600">{bus.duration}</p>
                    <div className="w-32 h-px bg-gray-300 my-2"></div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold">{bus.arrival.time}</p>
                    <p>{bus.arrival.city}</p>
                    <p className="text-sm text-gray-600">{bus.arrival.station}</p>
                  </div>
                </div>
                
                <button className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
                  Забронировать
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };