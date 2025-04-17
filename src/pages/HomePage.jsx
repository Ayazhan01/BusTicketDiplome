import { useState } from 'react';
import { IoTicketOutline } from 'react-icons/io5';
import BusSearchForm from '../components/BusSearchForm';
import PopularDirections from '../components/PopularDirections';
import FAQSection from '../components/FAQSection';
import MapSection from '../components/MapSection';

const HomePage = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className='min-h-screen bg-white flex flex-col space-y-30'>
      <section className="flex items-center justify-between md:px-20">
        <div
          className="flex flex-col max-w-2/4 gap-6"
          style={{
            backgroundImage: "url(public/1.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "70% auto",
          }}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-center flex flex-col items-center space-y-3">
            <IoTicketOutline />
            <span className="text-balck">АВТОБУСНЫЕ</span>
            <span className="text-red-500">БИЛЕТЫ</span>
            <span className=" border-b-2 w-20 mt-3"></span>
          </h1>

          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-600">
            На нашем сайте вы найдете обширный выбор перевозчиков, которые
            предлагают множество рейсов по самым различным направлениям по
            Европе, преимущественно – в Польшу, Германию и Украину.
          </p>
        </div>

        <div className="flex justify-end">
          <BusSearchForm onSearch={handleSearchResults} />
        </div>
      </section>

      {/* Секция для отображения результатов поиска */}
      {searchResults && (
        <>
       
        <div className='bg-gray-100'> 
        <img src="public/transition.png" className="rotate-180" />
          <section className="w-2/4 my-5 mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center flex flex-col items-center space-y-3">Найденные <span className="text-red-500">автобусы</span></h2>
            {searchResults.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Автобусов по вашему запросу не найдено</p>
              </div>
            ) : (
              <div className="space-y-7">
                {searchResults.map(bus => (
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

                    <button className="mt-4 w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300">
                      Забронировать
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        <img src="public/transition.png" className="" />
        </div>
        </>
      )}

        <PopularDirections />

        <FAQSection/>

        <MapSection/>
      
    </div>
  );
};

export default HomePage;

