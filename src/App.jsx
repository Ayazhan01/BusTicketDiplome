import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import Booking from "./components/Booking";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Terms from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Register from "./components/Register";
import Login from "./components/Login"; // Add this import

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<OrderConfirmation />} />

          {/* Страницы с инфой */}
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Аутентификация */}
          <Route path="/login" element={<Login isLogin />} />
          <Route path="/register" element={<Register isLogin={false} />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
