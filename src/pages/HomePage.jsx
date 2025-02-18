

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
    
    

      {/* Поисковая форма */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold">Поиск автобусных билетов</h2>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md inline-block">
          <input type="text" placeholder="Откуда" className="border p-2 mr-2" />
          <input type="text" placeholder="Куда" className="border p-2 mr-2" />
          <input type="date" className="border p-2 mr-2" />
          <button className="bg-orange-500 text-white px-6 py-2 rounded">Найти</button>
        </div>
      </section>

      {/* Популярные маршруты */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Популярные маршруты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">Алматы - Астана</h3>
            <p className="text-gray-600">от 5000 тг</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">Шымкент - Караганда</h3>
            <p className="text-gray-600">от 4500 тг</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">Костанай - Павлодар</h3>
            <p className="text-gray-600">от 6000 тг</p>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default HomePage;
