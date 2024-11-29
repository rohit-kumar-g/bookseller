import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig.mjs";
import { collection, getDocs } from "firebase/firestore";

const HomePage = ({ onSchoolSelect }) => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      const schoolCollection = collection(db, "schools");
      const schoolSnapshot = await getDocs(schoolCollection);
      setSchools(schoolSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchSchools();
  }, []);

  return (
    <div>
      <h2>Select a School</h2>
      <ul>
        {schools.map(school => (
          <li key={school.id} onClick={() => onSchoolSelect(school)}>
            {school.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
