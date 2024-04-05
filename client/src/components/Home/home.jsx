import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import Images from "./imageData.js";
import React, { useState, useEffect } from 'react';
import './home.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:4000/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setError(null); // Reset error state if fetch is successful
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  };

  const renderCards = () => {
    data.map((item) => (
    let r = [], a = [];
    item["railway"].forEach(obj => {
        r.push(obj.transportation_name)
    });
    item["airport"].forEach(obj => {
        a.push(obj.transportation_name)
    });
    return(
    <div className="card" key={item.place_id}>
        <div className="top-card">
          <img src={Images[item.place_name]} className="img" alt={item.place_name} />
          <div className="homeCardInfo">
            <center>
              <h2 className="title">{item.place_name}</h2>
            </center>
            <p className="bottom-text">Building: {item.building}</p>
            <p className="bottom-text">State: {item.state}</p>
            {r ? (
                <></>
            ) : (
                <p className="bottom-text">Railway Station: {r}</p>
            )}
            {a ? (
                <></>
            ) : (
                <p className="bottom-text">Airport: {a}</p>
            )}
          </div>
        </div>
        <div className="actions-card">
          <button className="btn" id="planBtn">Check Weather</button>
          <button className="btn" id="planBtn">Let's plan</button>
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
          {error ? (
            <p>Error: {error.message}</p>
          ) : (
            renderCards()
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
