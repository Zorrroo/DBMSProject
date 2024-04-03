import { useState } from 'react';
import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import "./travel.css";
import { IoSearchSharp } from "react-icons/io5";

const Travel = () => {
  const [selectedTransport, setSelectedTransport] = useState('train');
  const [fromPlace, setFromPlace] = useState('');
  const [toPlace, setToPlace] = useState('');
  const places = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Dubai'];

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
          <button type="button" className="searchBtn">
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
      <div id="results"></div>
      <Footer />
    </>
  );
};
export default Travel;
