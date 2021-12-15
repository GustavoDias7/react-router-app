import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Produtos from "./components/Produtos";
import Contato from "./components/Contato";
import Produto from "./components/Produto";
import Policies from "./components/Policies";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="contato" element={<Contato />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="politica/:type/:topic" element={<Policies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
