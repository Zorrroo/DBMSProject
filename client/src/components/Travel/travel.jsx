import "./travel.css";
import { IoSearchSharp } from "react-icons/io5";

const Travel = () => {
  const searchField = () => {
    return (
        <div className="container1">
          <div className="searchField">
            <button className="searchIcon" type="button">
              <IoSearchSharp size={20} />
            </button>
            <input type="search" className="searchInput" placeholder="From" />
          </div>
          <div className="searchField">
            <button className="searchIcon" type="button">
              <IoSearchSharp size={20} />
            </button>
            <input type="search" className="searchInput" placeholder="To" />
          </div>
          <button type="button" className="searchBtn">
            Search
          </button>
        </div>
    );
  };

  return (
    <div className="travelComponent">
      {searchField()}
      <div>
        <img src="/src/assets/airplane.png" alt="image" className="image" />
        <img src="/src/assets/train.png" alt="image" className="image" />
      </div>
    </div>
  );
};
export default Travel;
