import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Как купить билет?",
      answer:
        "Выберите маршрут, дату и время, затем укажите свои данные и оплатите билет онлайн.",
    },
    {
      question: "Можно ли вернуть билет?",
      answer:
        "Да, возврат билета возможен в соответствии с правилами перевозчика. Подробнее в разделе условий.",
    },
    {
      question: "Какие способы оплаты доступны?",
      answer: "Вы можете оплатить билет картой, мобильным кошельком или банковским переводом.",
    },
    {
      question: "Нужно ли распечатывать билет?",
      answer:
        "Нет, достаточно показать электронный билет на экране телефона при посадке в автобус.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      {/* Фон с картинкой */}
      <div className="absolute inset-0">
        <img
          src="/public/home1.jpg"
          alt="FAQ Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Контейнер с вопросами */}
      <div className="relative max-w-3xl w-full bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Часто задаваемые вопросы
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full text-left flex justify-between items-center py-3 text-lg font-semibold text-gray-800 hover:text-orange-500 transition-all duration-200"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={`transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-700 bg-gray-50 p-3 rounded-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
