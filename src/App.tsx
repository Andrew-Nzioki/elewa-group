import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import InvestPage from './views/invest/Invest';
import SocialImpact from './views/social-impact/SocialImpact';
import About from './views/about/About';

const cultureUrl="http://localhost:5000/caltureValues"
const managementUrl="http://localhost:5000/management"
const statsUrl="http://localhost:5000/stats"
function App() {
  const [companies, setData] = useState([]); 
  const [culture,setCultures]=useState([])
  const [management,setManagement]=useState([])
  const [team,setTeam]=useState([])
  const [stats,setStats]=useState([])
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:5000/companies'); 
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCompanies();

    const fetchCultures = async () => {
      try {
        const response = await fetch(cultureUrl); 
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const jsonData = await response.json();
        setCultures(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCultures();


    fetchCompanies();

    const fetchManagement = async () => {
      try {
        const response = await fetch(managementUrl); 
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const jsonData = await response.json();
        setManagement(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchManagement();
    const fetchStats = async () => {
      try {
        const response = await fetch(statsUrl); 
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const jsonData = await response.json();
        setStats(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<InvestPage />} />
        <Route path="/social-impact" element={<SocialImpact companies={companies} stats={stats}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
     
  
    </>
  );
}

export default App;
