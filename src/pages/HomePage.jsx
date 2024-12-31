import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import SchoolCards from '../schools/ListSchool';
import SchoolList from '../schools/VListSchools';
import BottomNav from './BottomNav';

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

  const schoolsarr = [
    {
      id: 1,
      image: 'https://media.istockphoto.com/id/1317007945/photo/exterior-view-of-a-typical-american-school-building.jpg?s=1024x1024&w=is&k=20&c=5WocERwOz67JfE7y2WQVLabwow1u7juvVnpKso5Oypc=',
      name: 'St.Mary school',
      address: '123 Main St, Cityville',
      rating: 4.5,
      description: 'A prestigious institution focusing on excellence in education.',
    },
    {
      id: 2,
      image: 'https://media.istockphoto.com/id/990309718/photo/texas-county-courthouse.jpg?s=612x612&w=0&k=20&c=-z-5biBo6pdvsYqmWLG-sT0vvkyMOIY6C-7Obw1-XXo=',
      name: 'St. VINCENT SCHOOL',
      address: '456 Elm St, Townsville',
      rating: 4.8,
      description: 'An international school with world-class facilities.',
    }, {
      id: 5,
      image: 'https://media.istockphoto.com/id/471452547/photo/collegiate-building-on-college-campus-in-spokane-wa.jpg?s=612x612&w=0&k=20&c=Bh-iQKtJ7rJeN__ix8Zw_0DF-Py8GF1oGTLkxXyAW_o=',
      name: 'A.G Church Asansol School',
      address: '456 Elm St, Townsville',
      rating: 4.8,
      description: 'An international school with world-class facilities.',
    }, {
      id: 4,
      image: 'https://media.istockphoto.com/id/1583705461/photo/the-hamilton-county-courthouse-in-mcleansboro-illinois-usa.jpg?s=612x612&w=0&k=20&c=STLVUl847UOWZ9aHIaRX0fwnH-QwEztAhR1yeRHJnqI=',
      name: 'Burnpir Riverside School',
      address: '456 Elm St, Townsville',
      rating: 4.8,
      description: 'An international school with world-class facilities.',
    }, {
      id: 3,
      image: 'https://media.istockphoto.com/id/950413830/photo/arkansas-county-courthouse.jpg?s=612x612&w=0&k=20&c=kJ9VmYbJs9wCSZx45XPK8Z0yRIJWG15rPjPQ0sbl4MU=',
      name: 'Loretta convent',
      address: '456 Elm St, Townsville',
      rating: 4.8,
      description: 'An international school with world-class facilities.',
    },
  ];
  

  return (
    <div className="home-page">
      {/* <h1>Schools</h1> */}

      <SchoolCards schools={schoolsarr}/>
      <SchoolList schools={schoolsarr} />
      <BottomNav/>
      {/* <ul>
        {schools.map((school) => (
          <li key={school.id} onClick={() => navigate(`/classes/${school.id}`)}>
            {school.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default HomePage;
