import { IoTicketOutline } from 'react-icons/io5';

const PrivacyPolicy = () => {
  return (
    <div className='min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className="text-3xl md:text-6xl font-bold text-center flex flex-col items-center space-y-3 uppercase mb-12">
          <IoTicketOutline />
          <span className="text-black">Политика</span>
          <span className="text-red-500">конфиденциальности</span>
          <span className="border-b-2 w-20 mt-3"></span>
        </h1>

        <div className='bg-gray-100 rounded-lg shadow-lg p-6 md:p-10'>
          <div className='prose max-w-none'>
            <h2 className='text-2xl font-bold mb-4'>1. Общие положения</h2>
            <p className='mb-6 text-gray-700'>
              Настоящая Политика конфиденциальности регулирует порядок обработки и использования персональных данных пользователей сайта.
            </p>

            <h2 className='text-2xl font-bold mb-4'>2. Сбор информации</h2>
            <p className='mb-6 text-gray-700'>
              Мы собираем информацию, которую вы предоставляете при поиске и бронировании билетов, включая: имя, контактные данные, паспортные данные (для международных рейсов), информацию о платежах.
            </p>

            <h2 className='text-2xl font-bold mb-4'>3. Использование информации</h2>
            <p className='mb-6 text-gray-700'>
              Собранная информация используется для: обработки заказов, связи с пользователями, улучшения качества услуг, отправки информационных сообщений (только с согласия пользователя).
            </p>

            <h2 className='text-2xl font-bold mb-4'>4. Защита данных</h2>
            <p className='mb-6 text-gray-700'>
              Мы применяем современные методы шифрования и защиты данных. Доступ к персональным данным имеют только уполномоченные сотрудники.
            </p>

            <h2 className='text-2xl font-bold mb-4'>5. Cookies и аналитика</h2>
            <p className='mb-6 text-gray-700'>
              Сайт использует cookies для улучшения работы сервиса. Мы также используем аналитические системы для сбора обезличенных данных о посещаемости.
            </p>

            <h2 className='text-2xl font-bold mb-4'>6. Изменения в политике</h2>
            <p className='mb-6 text-gray-700'>
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия всегда доступна на этой странице.
            </p>

            <div className='mt-8 p-4 bg-white rounded-lg border border-gray-200'>
              <p className='text-gray-600'>
                <strong>Дата последнего обновления:</strong> 18 апреля 2024 г.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;