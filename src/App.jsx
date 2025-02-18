// src/App.jsx (Обновляем, чтобы добавить Header и Footer)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import Profile from "./pages/Profile";
import LoginRegister from "./pages/LoginRegister";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<OrderConfirmation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
