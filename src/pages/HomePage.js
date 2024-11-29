import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchools = async () => {
      const snapshot = await getDocs(collection(db, 'schools'));
      setSchools(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchSchools();
  }, []);

  return (
    <div className="home-page">
      <h1>Schools</h1>
      <ul>
        {schools.map((school) => (
          <li key={school.id} onClick={() => navigate(`/classes/${school.id}`)}>
            {school.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
