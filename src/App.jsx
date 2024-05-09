import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import Book from "./pages/Book";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
          <Route path="/book/:bookSlug" element={<Book />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
