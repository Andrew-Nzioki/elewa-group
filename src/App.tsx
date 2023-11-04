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
  fetchTeam,
  fetchHistory
} from "./services/services";

function App() {
  const [companies, setCompanies] = useState([]);
  const [culture, setCultures] = useState([]);
  const [management, setManagement] = useState([]);
  const [stats, setStats] = useState([]);
  const [history,setHistory]=useState([])
  const [team,setTeam]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      const companiesData = await fetchCompanies();
      const cultureData = await fetchCultures();
      const managementData = await fetchManagement();
      const statsData = await fetchStats();
      const historyData=await fetchHistory()
      const teamData=await fetchTeam()

      setCompanies(companiesData);
      setCultures(cultureData);
      setManagement(managementData);
      setStats(statsData);
      setHistory(historyData)
      setTeam(teamData)
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
        <Route path="/about" element={<About management={management} culture={culture} history={history} team={team}/>} />
      </Routes>
    </>
  );
}

export default App;
