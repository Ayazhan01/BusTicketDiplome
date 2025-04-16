import { useState } from "react";
import {
//   FaBus,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
} from "react-icons/fa";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Как купить билет на междугородний автобус в Казахстане?",
      answer:
        "Вы можете купить билеты онлайн через наш сервис, в кассах автовокзалов или у агентов перевозчика. Электронные билеты действительны без распечатки - достаточно показать их на телефоне.",
    },
    {
      question: "Нужно ли приходить на автовокзал заранее?",
      answer:
        "Рекомендуем прибыть минимум за 30 минут до отправления для прохождения посадки. При международных перевозках - за 1 час.",
    },
    {
      question: "Можно ли вернуть или обменять билет?",
      answer:
        "Да, билеты можно вернуть или обменять не позднее чем за 2 часа до отправления. Комиссия за возврат составляет 10% от стоимости билета.",
    },
    {
      question: "Какие документы нужны для поездки?",
      answer:
        "Для взрослых - удостоверение личности или паспорт. Детям до 16 лет - свидетельство о рождении. На международных рейсах - загранпаспорт и виза (при необходимости).",
    },
    {
      question: "Есть ли льготы для детей и пенсионеров?",
      answer:
        "Дети до 5 лет - бесплатно (без отдельного места), от 5 до 12 лет - 50% скидка. Пенсионеры получают 10% скидку на все рейсы при предъявлении удостоверения.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white  md:px-20" >
      <div className="flex flex-col md:flex-row gap-5" >
        <div className="flex flex-col space-y-3 w-full items-start"    style={{
          backgroundImage: "url(public/3.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "80% auto",
        }}>
        
            <h2 className="flex flex-col text-3xl md:text-5xl font-bold uppercase">
              Частые вопросы <span className="text-red-500">о междугородних автобусах</span>
            </h2>
            <p className="text-xl text-gray-600">
              Всё, что нужно знать о поездках по Казахстану на автобусе
            </p>

            {/* <div className="inline-flex items-center justify-center bg-red-100 text-red-600 rounded-full p-3  mb-4">
              <FaBus className="text-7xl" />
            </div> */}

          
            <p className="text-gray-600 mb-6">Не нашли ответ на свой вопрос?</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors inline-flex items-center">
              Связаться с поддержкой
              <FaArrowRight className="ml-2" />
            </button>
          
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className={`w-full flex items-center justify-between p-6 text-left ${
                  activeIndex === index ? "bg-red-50" : "bg-white"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-red-600 flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-gray-500 flex-shrink-0" />
                )}
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
