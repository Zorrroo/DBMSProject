import Navbar from "/src/components/Navbar/navbar.jsx"
import Footer from "/src/components/Footer/footer.jsx"
import React, { useState, useEffect } from 'react';
import './home.css'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:4000')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const renderCards = () => {
    return data.map((item, index) => (
      <div className="card" key={index}>
        <div className="top-card">
          <img src={`./${item.image}`} className="img" alt={item.title} />
          <center>
            <h2 className="title">{item.title}</h2>
            <p className="bottom-text">{item.type}</p>
            <p className="bottom-text">State: {item.state}</p>
            <p className="bottom-text">Near By station: {item.station}</p>
          </center>
        </div>
        <div className="bottom-card">
          <div className="actions-card">
            <button className="btn" id="washroomCleanBtn">Let's plan</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
    <Navbar />
    <div className="main-container">
      <h1 className="heading">Explore all the places</h1>
      <div className="content">
        {renderCards()}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;

