import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SchoolListContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const SchoolListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  max-height: 80vh; /* Makes the list scrollable if too long */
`;

const SchoolCard = styled.div`
  display: flex;
  gap: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 8px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SchoolName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SchoolAddress = styled.p`
  font-size: 14px;
  color: #555;
  margin: 3px 0;
`;

const SchoolRating = styled.p`
  font-size: 14px;
  color: #555;
  margin: 3px 0;
`;

const SchoolDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin: 3px 0;
`;

const SchoolList = ({ schools }) => {
  const navigate = useNavigate();

  return (
    <SchoolListContainer>
      <h2>Our Partner Schools</h2>
      <SchoolListWrapper>
        {schools.map((school) => (
          <SchoolCard 
            key={school.id} 
            onClick={() => navigate(`/classes/${school.id}`)}
          >
            <ImageWrapper>
              <CardImage 
                src={school.image} 
                alt={`${school.name} image`} 
              />
            </ImageWrapper>
            <CardDetails>
              <SchoolName>{school.name}</SchoolName>
              <SchoolAddress>{school.address}</SchoolAddress>
              <SchoolRating>Rating: {school.rating} ★</SchoolRating>
              <SchoolDescription>{school.description}</SchoolDescription>
            </CardDetails>
          </SchoolCard>
        ))}
      </SchoolListWrapper>
    </SchoolListContainer>
  );
};

export default SchoolList;
