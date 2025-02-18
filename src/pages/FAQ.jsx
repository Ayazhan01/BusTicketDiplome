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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Часто задаваемые вопросы</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-3">
              <button
                className="w-full text-left flex justify-between items-center py-2 text-lg font-semibold text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
