import { useState, useEffect } from 'react';
import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import "./travel.css";
import { IoSearchSharp } from "react-icons/io5";

const Travel = () => {
  const [selectedTransport, setSelectedTransport] = useState('train');
  const [fromPlace, setFromPlace] = useState('');
  const [toPlace, setToPlace] = useState('');
  const [results, setResults] = useState([]);
  const places = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Dubai'];

  useEffect(() => {
    fetchData();
  }, [selectedTransport, fromPlace, toPlace]);

  const fetchData = async () => {
    if (fromPlace && toPlace) {
      let url = `http://localhost:3000/${selectedTransport}?from=${fromPlace}&to=${toPlace}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const handleTransportSelection = (transport) => {
    setSelectedTransport(transport);
  };

  const handlePlaceSelection = (place, type) => {
    type === 'from' ? setFromPlace(place) : setToPlace(place);
  };

  return (
    <>
      <Navbar />
      <div className="travelComponent">
        <div className="container1">
          <div className="searchField">
            <button className="searchIcon" type="button">
              <IoSearchSharp size={20} />
            </button>
            <select className="searchInput" onChange={(e) => handlePlaceSelection(e.target.value, 'from')}>
              <option value="">From</option>
              {places.map(place => (
                place !== toPlace && <option key={place} value={place}>{place}</option>
              ))}
            </select>
          </div>
          <div className="searchField">
            <button className="searchIcon" type="button">
              <IoSearchSharp size={20} />
            </button>
            <select className="searchInput" onChange={(e) => handlePlaceSelection(e.target.value, 'to')}>
              <option value="">To</option>
              {places.map(place => (
                place !== fromPlace && <option key={place} value={place}>{place}</option>
              ))}
            </select>
          </div>
          <button type="button" className="searchBtn" onClick={fetchData}>
            Search
          </button>
        </div>
        <p className='travel-para'>Select which mode of transportation do you like?</p>
        <div>
          <img
            src="/src/assets/train.png"
            alt="train"
            className={selectedTransport === 'train' ? 'image selected' : 'image'}
            onClick={() => handleTransportSelection('train')}
          />
          <img
            src="/src/assets/airplane.png"
            alt="airplane"
            className={selectedTransport === 'airplane' ? 'image selected' : 'image'}
            onClick={() => handleTransportSelection('airplane')}
          />
        </div>
      </div>
      <div id="results">
        {results.map((result, index) => (
          <div key={index} className="result">
            <p>{result.name}</p>
            <p>{result.number}</p>
            <p>{result.from}</p>
            <p>{result.to}</p>
            {/* Add more data fields as needed */}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Travel;
