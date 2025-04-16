import { useState, useEffect } from 'react';
import { FaUser, FaHistory, FaTicketAlt, FaEdit, FaSignOutAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [bookings, setBookings] = useState([]);
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  // Загрузка данных пользователя при монтировании
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return;
    }

    // Загрузка данных пользователя (моковые данные)
    loadUserData();
    loadBookings();
    loadHistory();
  }, [navigate]);

  const loadUserData = () => {
    // В реальном приложении здесь будет запрос к API
    setTimeout(() => {
      setUserData({
        name: 'Иван Иванов',
        email: 'ivan@example.com',
        phone: '+7 (777) 123-45-67',
      });
      setFormData({
        name: 'Иван Иванов',
        email: 'ivan@example.com',
        phone: '+7 (777) 123-45-67',
      });
    }, 500);
  };

  const loadBookings = () => {
    // Моковые данные текущих бронирований
    setTimeout(() => {
      setBookings([
        {
          id: 1,
          route: 'Алматы - Нур-Султан',
          date: '15.10.2023',
          time: '08:00',
          seats: ['12', '13'],
          price: 6000,
          status: 'confirmed'
        },
        {
          id: 2,
          route: 'Алматы - Шымкент',
          date: '20.10.2023',
          time: '14:30',
          seats: ['5'],
          price: 4500,
          status: 'confirmed'
        }
      ]);
    }, 700);
  };

  const loadHistory = () => {
    // Моковые данные истории поездок
    setTimeout(() => {
      setHistory([
        {
          id: 3,
          route: 'Алматы - Астана',
          date: '05.09.2023',
          price: 5500,
          status: 'completed'
        },
        {
          id: 4,
          route: 'Алматы - Караганда',
          date: '12.08.2023',
          price: 4800,
          status: 'completed'
        }
      ]);
    }, 700);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setFormData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    // В реальном приложении здесь будет запрос к API
    setUserData(formData);
    setIsEditing(false);
    // Тут можно добавить уведомление об успешном сохранении
  };

  const handleCancelBooking = (bookingId) => {
    // В реальном приложении здесь будет запрос к API
    setBookings(bookings.filter(booking => booking.id !== bookingId));
    // Тут можно добавить уведомление об успешной отмене
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  if (!userData) {
    return <div className="min-h-screen flex items-center justify-center">Загрузка...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка профиля */}
      <div className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-white text-red-600 rounded-full w-24 h-24 flex items-center justify-center text-4xl mb-4 md:mb-0 md:mr-6">
              <FaUser />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">{userData.name}</h1>
              <p className="mt-2 flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2" /> {userData.email}
              </p>
              <p className="mt-1 flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2" /> {userData.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Основное содержимое */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Боковая панель */}
          <div className="w-full md:w-64 mb-6 md:mb-0 md:mr-8">
            <div className="bg-white rounded-lg shadow-md p-4">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`w-full flex items-center py-3 px-4 rounded-lg mb-2 ${activeTab === 'bookings' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
              >
                <FaTicketAlt className="mr-3" />
                Мои бронирования
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`w-full flex items-center py-3 px-4 rounded-lg mb-2 ${activeTab === 'history' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
              >
                <FaHistory className="mr-3" />
                История поездок
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center py-3 px-4 rounded-lg mb-6 ${activeTab === 'profile' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
              >
                <FaUser className="mr-3" />
                Профиль
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center py-3 px-4 rounded-lg text-red-600 hover:bg-red-50"
              >
                <FaSignOutAlt className="mr-3" />
                Выйти
              </button>
            </div>
          </div>

          {/* Основная панель */}
          <div className="flex-1">
            {activeTab === 'bookings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Текущие бронирования</h2>
                {bookings.length === 0 ? (
                  <p className="text-gray-500">У вас нет активных бронирований</p>
                ) : (
                  <div className="space-y-4">
                    {bookings.map(booking => (
                      <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div>
                            <h3 className="font-bold text-lg">{booking.route}</h3>
                            <p className="text-gray-600">{booking.date} в {booking.time}</p>
                            <p className="text-gray-600">Места: {booking.seats.join(', ')}</p>
                          </div>
                          <div className="mt-3 md:mt-0 md:text-right">
                            <p className="font-bold text-lg">{booking.price} ₸</p>
                            <p className="text-green-600">Подтверждено</p>
                            <button
                              onClick={() => handleCancelBooking(booking.id)}
                              className="mt-2 text-red-600 hover:text-red-800 text-sm font-medium"
                            >
                              Отменить бронирование
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'history' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">История поездок</h2>
                {history.length === 0 ? (
                  <p className="text-gray-500">У вас нет завершенных поездок</p>
                ) : (
                  <div className="space-y-4">
                    {history.map(trip => (
                      <div key={trip.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <h3 className="font-bold text-lg">{trip.route}</h3>
                            <p className="text-gray-600">{trip.date}</p>
                          </div>
                          <div className="mt-3 md:mt-0 md:text-right">
                            <p className="font-bold text-lg">{trip.price} ₸</p>
                            <p className="text-blue-600">Завершено</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Личные данные</h2>
                  {!isEditing ? (
                    <button
                      onClick={handleEditProfile}
                      className="flex items-center text-red-600 hover:text-red-800"
                    >
                      <FaEdit className="mr-2" /> Редактировать
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={handleCancelEdit}
                        className="mr-4 text-gray-600 hover:text-gray-800"
                      >
                        Отмена
                      </button>
                      <button
                        onClick={handleSaveProfile}
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
                      >
                        Сохранить
                      </button>
                    </div>
                  )}
                </div>

                {!isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-500 text-sm">ФИО</p>
                      <p className="text-lg">{userData.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Email</p>
                      <p className="text-lg">{userData.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Телефон</p>
                      <p className="text-lg">{userData.phone}</p>
                    </div>
                  </div>
                ) : (
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">ФИО</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Телефон</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
                      />
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;