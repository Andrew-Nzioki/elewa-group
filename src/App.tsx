import React from "react";
import { Routes, Route } from "react-router-dom";

import InvestPage from "./views/invest/Invest";
import SocialImpact from "./views/social-impact/SocialImpact";
import About from "./views/about/About";
function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<InvestPage />} />
        <Route path="/social-impact" element={<SocialImpact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
