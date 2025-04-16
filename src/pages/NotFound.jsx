import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  // Автоматическое перенаправление через 8 секунд
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 8000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
    

      {/* Основное содержимое */}
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
            <div className="flex justify-center text-red-500 mb-6">
              <FaExclamationTriangle className="text-6xl" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">404 - Страница не найдена</h2>
            
            <p className="text-gray-600 mb-6">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                Вы будете автоматически перенаправлены на главную страницу через 8 секунд...
              </p>
            </div>
            
            <button 
              onClick={() => navigate('/')} 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center mx-auto transition-colors"
            >
              <FaHome className="mr-2" />
              На главную страницу
            </button>
          </div>
        </div>
      </main>

   
    </div>
  );
};

export default NotFound;