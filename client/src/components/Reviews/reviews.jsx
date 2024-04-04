import { useState, useEffect } from 'react';
import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import './reviews.css';

const Review = () => {
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    useEffect(() => {
        // Fetch place names from the API
        fetchPlaces();
    }, []);

    const fetchPlaces = () => {
        fetch('http://localhost:4000/reviewPlace')
            .then(response => response.json())
            .then(data => setPlaces(data.places))
            .catch(error => console.error('Error fetching places:', error));
    };

    const handlePlaceChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div className="reviewContainer">
                <div className="dropdownContainer">
                    <label htmlFor="place">Place:</label>
                    <select id="place" value={selectedPlace} onChange={handlePlaceChange}>
                        <option value="">Select any</option>
                        {places.map((place, index) => (
                            <option key={index} value={place}>{place}</option>
                        ))}
                    </select>
                </div>
                <div className="dropdownContainer">
                    <label htmlFor="sort">Rating:</label>
                    <select id="sort" value={selectedSort} onChange={handleSortChange}>
                        <option value="">Select any</option>
                        <option value="highToLow">High to Low</option>
                        <option value="lowToHigh">Low to High</option>
                    </select>
                </div>
                {/* Additional UI elements can be added here */}
            </div>
            <Footer />
        </>
    );
};

export default Review;
