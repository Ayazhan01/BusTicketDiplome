import { IoTicketOutline } from 'react-icons/io5';

const TermsOfService = () => {
  return (
    <div className='min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto'>
        <h1 className="text-3xl md:text-6xl font-bold text-center flex flex-col items-center space-y-3 uppercase mb-12">
          <IoTicketOutline />
          <span className="text-black">Условия</span>
          <span className="text-red-500">использования</span>
          <span className="border-b-2 w-20 mt-3"></span>
        </h1>

        <div className='bg-gray-100 rounded-lg shadow-lg p-6 md:p-10'>
          <div className='prose max-w-none'>
            <h2 className='text-2xl font-bold mb-4'>1. Общие положения</h2>
            <p className='mb-6 text-gray-700'>
              Настоящие Условия использования регулируют порядок работы с сайтом и бронирования автобусных билетов.
            </p>

            <h2 className='text-2xl font-bold mb-4'>2. Бронирование билетов</h2>
            <p className='mb-6 text-gray-700'>
              При бронировании билета вы соглашаетесь с тарифами и условиями перевозчика. Цены на сайте могут изменяться в зависимости от спроса и доступности мест.
            </p>

            <h2 className='text-2xl font-bold mb-4'>3. Оплата</h2>
            <p className='mb-6 text-gray-700'>
              Оплата производится через защищенные платежные системы. После успешной оплаты вы получаете электронный билет на указанную почту.
            </p>

            <h2 className='text-2xl font-bold mb-4'>4. Возврат и обмен</h2>
            <p className='mb-6 text-gray-700'>
              Условия возврата и обмена билетов регулируются правилами перевозчика. Обычно возможен возврат с удержанием комиссии не позднее чем за 24 часа до отправления.
            </p>

            <h2 className='text-2xl font-bold mb-4'>5. Ответственность</h2>
            <p className='mb-6 text-gray-700'>
              Мы не несем ответственности за задержки и отмены рейсов, которые зависят от перевозчиков и внешних обстоятельств.
            </p>

            <h2 className='text-2xl font-bold mb-4'>6. Изменения условий</h2>
            <p className='mb-6 text-gray-700'>
              Мы оставляем за собой право изменять настоящие Условия использования. Рекомендуем периодически проверять их актуальность.
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

export default TermsOfService;