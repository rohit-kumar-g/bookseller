import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SchoolCards.css'; // For styling

const SchoolCards = ({ schools }) => {
  const navigate = useNavigate();

  return (
    <div className="school-cards-container">
      <h2>Popular</h2>
      <div className="school-cards-wrapper">
        {schools.map((school) => (
          <div 
            key={school.id} 
            className="school-card" 
            onClick={() => navigate(`/classes/${school.id}`)}
          >
            <img 
              src={school.image} 
              alt={`${school.name} image`} 
              className="school-card-image" 
            />
            <div className="school-card-details">
              <h3>{school.name}</h3>
              <p>{school.address}</p>
              <p>Rating: {school.rating} ★</p>
              <p>{school.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolCards;
