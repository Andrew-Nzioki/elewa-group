import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import InvestPage from "./views/invest/Invest";
import SocialImpact from "./views/social-impact/SocialImpact";
import About from "./views/about/About";
import {
  fetchCompanies,
  fetchCultures,
  fetchManagement,
  fetchStats,
} from "./services/services";

function App() {
  const [companies, setCompanies] = useState([]);
  const [culture, setCultures] = useState([]);
  const [management, setManagement] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const companiesData = await fetchCompanies();
      const cultureData = await fetchCultures();
      const managementData = await fetchManagement();
      const statsData = await fetchStats();

      setCompanies(companiesData);
      setCultures(cultureData);
      setManagement(managementData);
      setStats(statsData);
    };

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<InvestPage />} />
        <Route
          path="/social-impact"
          element={<SocialImpact companies={companies} stats={stats} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
