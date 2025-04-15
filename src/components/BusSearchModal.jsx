const BusSearchModal = ({ results, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Найденные автобусы</h2>

        {results.length === 0 ? (
          <p>Автобусов не найдено</p>
        ) : (
          <div className="space-y-4">
            {results.map((bus) => (
              <div key={bus.id} className="bg-gray-100 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="font-bold">{bus.company} {bus.busNumber}</h3>
                    <p>{bus.type} класс</p>
                    <div className="flex gap-2 mt-1">
                      {bus.amenities.map((a, i) => (
                        <span key={i} className="text-xs bg-white px-2 py-1 rounded">{a}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl">{bus.price.toLocaleString()} ₸</p>
                    <p className="text-sm">{bus.seatsAvailable} мест</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <div>
                    <p>{bus.departure.time} — {bus.departure.city}</p>
                    <p>{bus.departure.station}</p>
                  </div>
                  <p>{bus.duration}</p>
                  <div className="text-right">
                    <p>{bus.arrival.time} — {bus.arrival.city}</p>
                    <p>{bus.arrival.station}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusSearchModal;
