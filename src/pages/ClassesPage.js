import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ClassesPage() {
  const { schoolId } = useParams();
  const navigate = useNavigate();

  const classes = ['Class 1', 'Class 2', 'Class 3']; // Example classes

  return (
    <div className="classes-page">
      <h1>Classes</h1>
      <ul>
        {classes.map((className, index) => (
          <li key={index} onClick={() => navigate(`/books/${schoolId}/${index + 1}`)}>
            {className}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassesPage;
