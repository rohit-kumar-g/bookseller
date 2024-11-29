import React from "react";

const ClassSelection = ({ school, onClassSelect }) => {
  const classes = school.classes || []; // Assuming each school has a "classes" array

  return (
    <div>
      <h2>Select a Class</h2>
      <ul>
        {classes.map((cls, index) => (
          <li key={index} onClick={() => onClassSelect(cls)}>
            {cls}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassSelection;
