import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import TicketPDF from './TicketPDF';

const BookingPage = () => {
  const location = useLocation();
  const { bus } = location.state || {};
  
  // Состояние для хранения данных всех пассажиров
  const [passengers, setPassengers] = useState([
    {
      id: Date.now(),
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      seatNumber: '',
      passportNumber: '',
      notes: ''
    }
  ]);

  // Данные оплаты
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    invoiceEmail: '',
    companyName: '',
    companyTaxId: ''
  });

  const [step, setStep] = useState(1); // 1 - данные пассажиров, 2 - оплата, 3 - завершение
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Добавить нового пассажира
  const addPassenger = () => {
    setPassengers([...passengers, {
      id: Date.now(),
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      seatNumber: '',
      passportNumber: '',
      notes: ''
    }]);
  };

  // Удалить пассажира
  const removePassenger = (id) => {
    if (passengers.length > 1) {
      setPassengers(passengers.filter(p => p.id !== id));
    }
  };

  // Обновить данные пассажира
  const updatePassenger = (id, field, value) => {
    setPassengers(passengers.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  // Выбранные места (чтобы не повторялись)
  const selectedSeats = passengers.map(p => p.seatNumber).filter(Boolean);

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({ ...prev, [name]: value }));
  };

  // Проверка готовности данных пассажиров
  const validatePassengers = () => {
    return passengers.every(p => 
      p.firstName && p.lastName && p.email && p.phone && p.seatNumber
    );
  };

  const handlePassengerSubmit = (e) => {
    e.preventDefault();
    if (!validatePassengers()) {
      alert('Пожалуйста, заполните все обязательные поля для всех пассажиров');
      return;
    }
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Валидация данных оплаты
    if (paymentMethod === 'card') {
      if (!paymentData.cardNumber || !paymentData.cardName || 
          !paymentData.expiryDate || !paymentData.cvv) {
        alert('Пожалуйста, заполните все данные карты');
        setIsProcessing(false);
        return;
      }
    } else {
      if (!paymentData.invoiceEmail || !paymentData.companyName || !paymentData.companyTaxId) {
        alert('Пожалуйста, заполните все данные для счета');
        setIsProcessing(false);
        return;
      }
    }
    
    // Имитация обработки платежа
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 2000);
  };

  // Общая сумма за все билеты
  const totalAmount = bus ? bus.price * passengers.length : 0;

  if (!bus) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded inline-block">
          Информация об автобусе не найдена. Пожалуйста, начните процесс заново.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Бронирование билета</h1>
      
      {/* Индикатор шагов */}
      <div className="flex mb-8">
        <div className={`flex-1 text-center py-2 border-b-2 ${step >= 1 ? 'border-red-500 text-red-500' : 'border-gray-300'}`}>
          Данные пассажиров ({passengers.length})
        </div>
        <div className={`flex-1 text-center py-2 border-b-2 ${step >= 2 ? 'border-red-500 text-red-500' : 'border-gray-300'}`}>
          Оплата
        </div>
        <div className={`flex-1 text-center py-2 border-b-2 ${step >= 3 ? 'border-red-500 text-red-500' : 'border-gray-300'}`}>
          Завершение
        </div>
      </div>

      {/* Шаг 1: Данные пассажиров */}
      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Информация о рейсе</h2>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold text-lg">{bus.company} {bus.busNumber}</h3>
                  <p className="text-gray-600">{bus.type} класс</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl">{bus.price.toLocaleString()} ₸</p>
                  <p className="text-sm">x {passengers.length} = {totalAmount.toLocaleString()} ₸</p>
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
            </div>

            <h2 className="text-xl font-semibold mb-4">Выберите места</h2>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="grid grid-cols-4 gap-4">
                {[...Array(20)].map((_, i) => {
                  const seatNum = (i + 1).toString();
                  const isSelected = selectedSeats.includes(seatNum);
                  const isAvailable = !isSelected;
                  
                  return (
                    <button
                      key={i}
                      type="button"
                      className={`p-3 rounded-lg border ${
                        isSelected ? 'bg-red-500 text-white' :
                        isAvailable ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-300 cursor-not-allowed'
                      }`}
                      onClick={() => {
                        // Находим текущего пассажира без места
                        const passengerWithoutSeat = passengers.find(p => !p.seatNumber);
                        if (passengerWithoutSeat && isAvailable) {
                          updatePassenger(passengerWithoutSeat.id, 'seatNumber', seatNum);
                        }
                      }}
                      disabled={!isAvailable}
                      title={isSelected ? `Место ${seatNum} занято` : ''}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Данные пассажиров</h2>
              <button
                type="button"
                onClick={addPassenger}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                disabled={passengers.length >= 5} // Ограничение на количество билетов
              >
                + Добавить пассажира
              </button>
            </div>

            <form onSubmit={handlePassengerSubmit}>
              {passengers.map((passenger, index) => (
                <div key={passenger.id} className="bg-white rounded-lg shadow p-6 mb-6 relative">
                  {passengers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePassenger(passenger.id)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                      title="Удалить пассажира"
                    >
                      ✕
                    </button>
                  )}
                  
                  <h3 className="text-lg font-medium mb-4">Пассажир #{index + 1}</h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Имя *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={passenger.firstName}
                        onChange={(e) => updatePassenger(passenger.id, 'firstName', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Фамилия *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={passenger.lastName}
                        onChange={(e) => updatePassenger(passenger.id, 'lastName', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={passenger.email}
                        onChange={(e) => updatePassenger(passenger.id, 'email', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={passenger.phone}
                        onChange={(e) => updatePassenger(passenger.id, 'phone', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Номер паспорта
                      </label>
                      <input
                        type="text"
                        name="passportNumber"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={passenger.passportNumber}
                        onChange={(e) => updatePassenger(passenger.id, 'passportNumber', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Примечания
                      </label>
                      <textarea
                        name="notes"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={passenger.notes}
                        onChange={(e) => updatePassenger(passenger.id, 'notes', e.target.value)}
                        rows="3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Выбранное место *
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                        value={passenger.seatNumber || 'Не выбрано'}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="mt-4 w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                disabled={!validatePassengers()}
              >
                Перейти к оплате ({totalAmount.toLocaleString()} ₸)
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Шаг 2: Оплата */}
      {step === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Детали бронирования</h2>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="font-bold mb-2">Пассажиры:</h3>
              <ul className="mb-4 space-y-2">
                {passengers.map((p, i) => (
                  <li key={i} className="border-b pb-2">
                    {p.firstName} {p.lastName} (Место: {p.seatNumber})
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold text-lg">{bus.company} {bus.busNumber}</h3>
                  <p className="text-gray-600">{bus.type} класс</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl">{totalAmount.toLocaleString()} ₸</p>
                  <p className="text-sm">{passengers.length} x {bus.price.toLocaleString()} ₸</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{bus.departure.time}</p>
                  <p>{bus.departure.city}</p>
                </div>

                <div className="text-center">
                  <p className="text-gray-600">{bus.duration}</p>
                  <div className="w-32 h-px bg-gray-300 my-2"></div>
                </div>

                <div className="text-right">
                  <p className="font-bold">{bus.arrival.time}</p>
                  <p>{bus.arrival.city}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Оплата</h2>
            <form onSubmit={handlePaymentSubmit} className="bg-white rounded-lg shadow p-6">
              <div className="flex space-x-4 mb-6">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg border ${
                    paymentMethod === 'card' ? 'bg-red-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  Банковская карта
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg border ${
                    paymentMethod === 'invoice' ? 'bg-red-500 text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setPaymentMethod('invoice')}
                >
                  Счет-фактура
                </button>
              </div>

              {paymentMethod === 'card' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Номер карты *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={paymentData.cardNumber}
                      onChange={handlePaymentChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя владельца карты *
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="IVAN IVANOV"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={paymentData.cardName}
                      onChange={handlePaymentChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Срок действия *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={paymentData.expiryDate}
                        onChange={handlePaymentChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV/CVC *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="123"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={paymentData.cvv}
                        onChange={handlePaymentChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email для счета *
                    </label>
                    <input
                      type="email"
                      name="invoiceEmail"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={paymentData.invoiceEmail}
                      onChange={handlePaymentChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Название компании *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={paymentData.companyName}
                      onChange={handlePaymentChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ИНН/БИН компании *
                    </label>
                    <input
                      type="text"
                      name="companyTaxId"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      value={paymentData.companyTaxId}
                      onChange={handlePaymentChange}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="font-bold text-lg text-center">
                  Итого к оплате: {totalAmount.toLocaleString()} ₸
                </p>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="mt-6 w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300 disabled:opacity-50"
              >
                {isProcessing ? 'Обработка платежа...' : 'Оплатить'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Шаг 3: Завершение */}
      {step === 3 && (
        <div className="max-w-3xl mx-auto">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Билеты успешно оформлены!</h2>
            <p>Ваш платеж был успешно обработан. Ниже вы можете скачать билеты.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Детали бронирования</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <p><span className="font-semibold">Номер бронирования:</span></p>
                <p className="text-lg">BK-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                
                <p><span className="font-semibold">Количество билетов:</span></p>
                <p className="text-lg">{passengers.length}</p>
                
                <p><span className="font-semibold">Email:</span></p>
                <p className="text-lg">{passengers[0].email}</p>
              </div>
              
              <div className="space-y-2">
                <p><span className="font-semibold">Маршрут:</span></p>
                <p className="text-lg">{bus.departure.city} → {bus.arrival.city}</p>
                
                <p><span className="font-semibold">Дата и время:</span></p>
                <p className="text-lg">{bus.departure.time}</p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="font-semibold text-center mb-2">Общая сумма:</p>
              <p className="text-2xl font-bold text-center text-red-500">{totalAmount.toLocaleString()} ₸</p>
            </div>

            <h3 className="text-lg font-semibold mb-4">Скачать билеты:</h3>
            <div className="space-y-4">
              {passengers.map((passenger, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div>
                    <p className="font-medium">Билет #{index + 1}: {passenger.firstName} {passenger.lastName}</p>
                    <p className="text-sm">Место: {passenger.seatNumber}</p>
                  </div>
                  <PDFDownloadLink
                    document={<TicketPDF bus={bus} passenger={passenger} />}
                    fileName={`билет-${bus.busNumber}-${passenger.lastName}-${index + 1}.pdf`}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-center rounded-lg transition-colors duration-300"
                  >
                    {({ loading }) => (loading ? 'Подготовка...' : 'Скачать')}
                  </PDFDownloadLink>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={() => window.print()}
                className="w-full py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
              >
                Распечатать все билеты
              </button>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-600">
            <p>Копии билетов были отправлены на email: {passengers[0].email}</p>
            <p className="mt-2">Спасибо, что выбрали наш сервис!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;