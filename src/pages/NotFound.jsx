const NotFound = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-500">Ошибка 404</h1>
        <p className="text-gray-600 mt-2">Страница не найдена.</p>
        <a href="/" className="text-blue-500 mt-4 block">На главную</a>
      </div>
    );
  };
  
  export default NotFound;
  