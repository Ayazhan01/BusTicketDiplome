// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Booking = () => {
//   const navigate = useNavigate();
//   const [passenger, setPassenger] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     seat: "",
//   });

//   const handleChange = (e) => {
//     setPassenger({ ...passenger, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (passenger.name && passenger.phone && passenger.email && passenger.seat) {
//       navigate("/payment");
//     } else {
//       alert("Заполните все поля");
//     }
//   };

//   const seats = Array.from({ length: 20 }, (_, i) => i + 1);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">Бронирование билета</h1>

//         {/* Выбор места */}
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold mb-2">Выберите место</h2>
//           <div className="grid grid-cols-5 gap-2">
//             {seats.map((seat) => (
//               <button
//                 key={seat}
//                 className={`p-2 border rounded-lg ${
//                   passenger.seat === String(seat) ? "bg-orange-500 text-white" : "bg-gray-200"
//                 }`}
//                 onClick={() => setPassenger({ ...passenger, seat: String(seat) })}
//               >
//                 {seat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Форма данных пассажира */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="ФИО"
//             className="w-full p-3 border rounded-lg"
//             onChange={handleChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Телефон"
//             className="w-full p-3 border rounded-lg"
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full p-3 border rounded-lg"
//             onChange={handleChange}
//           />
//           <button type="submit" className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
//             Перейти к оплате
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Booking;
