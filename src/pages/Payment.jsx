import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "card" && (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv)) {
      alert("Заполните все данные карты!");
      return;
    }
    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Оплата билета</h1>

        {/* Выбор метода оплаты */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Выберите способ оплаты</h2>
          <div className="flex space-x-4">
            <button
              className={`p-3 border rounded-lg w-1/2 ${
                paymentMethod === "card" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              Банковская карта
            </button>
            <button
              className={`p-3 border rounded-lg w-1/2 ${
                paymentMethod === "wallet" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setPaymentMethod("wallet")}
            >
              Электронный кошелек
            </button>
          </div>
        </div>

        {/* Форма оплаты картой */}
        {paymentMethod === "card" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="number"
              placeholder="Номер карты"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Имя владельца"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />
            <div className="flex space-x-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                className="w-1/2 p-3 border rounded-lg"
                onChange={handleChange}
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                className="w-1/2 p-3 border rounded-lg"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Оплатить
            </button>
          </form>
        )}

        {/* Фиктивная кнопка для кошелька */}
        {paymentMethod === "wallet" && (
          <button onClick={handleSubmit} className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            Оплатить через кошелек
          </button>
        )}
      </div>
    </div>
  );
};

export default Payment;
