import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import InvestPage from "./views/invest/Invest";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<InvestPage />} />
        <Route path="/social-impact" element={<h1>Social impact</h1>} />
        <Route path="/about" element={<h1>About page</h1>} />
      </Routes>
    </>
  );
}

export default App;
