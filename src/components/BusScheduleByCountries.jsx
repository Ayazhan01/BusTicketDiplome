import React from "react";

const BusScheduleByCountries = () => {
  const countries = [
    { letter: "А", names: ["Австрия"] },
    { letter: "Б", names: ["Болгария", "Беларусь", "Бельгия"] },
    { letter: "В", names: ["Венгрия"] },
    { letter: "Г", names: ["Германия", "Греция"] },
    { letter: "Д", names: ["Дания"] },
    { letter: "И", names: ["Италия", "Испания"] },
    { letter: "Л", names: ["Латвия", "Литва"] },
    { letter: "Н", names: ["Нидерланды", "Норвегия"] },
    { letter: "П", names: ["Португалия", "Польша"] },
    { letter: "Р", names: ["Россия"] },
    { letter: "У", names: ["Украина"] },
    { letter: "Ф", names: ["Финляндия", "Франция"] },
    { letter: "Ч", names: ["Чешская Республика"] },
    { letter: "Ш", names: ["Швеция"] },
    { letter: "Э", names: ["Эстония"] },
  ];

  return (
    <div className="bg-gradient-to-br from-red-100 via-white to-white rounded-lg p-8 shadow-lg mt-16">
      <h2 className="text-3xl lg:text-4xl font-bold uppercase mb-8 text-center text-gray-800">
        Автобусное расписание <br /> по странам
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-lg font-semibold text-gray-700">
        {countries.map(({ letter, names }) => (
          <div key={letter}>
            <div className="text-red-600 text-xl mb-2">{letter}</div>
            {names.map((name) => (
              <div key={name} className="hover:text-red-700 cursor-pointer">
                {name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusScheduleByCountries;
