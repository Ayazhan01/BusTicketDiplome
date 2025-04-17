// src/components/Dashboard.jsx
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Dashboard() {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-80 mx-auto mt-10 text-center">
      <h2 className="text-xl font-bold mb-4">Добро пожаловать!</h2>
      <button onClick={handleLogout} className="bg-gray-500 text-white py-2 px-4 rounded">
        Выйти
      </button>
    </div>
  );
}
