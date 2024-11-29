import { db } from "../firebaseConfig.mjs";
import { collection, addDoc } from "firebase/firestore";

const schools = [
  "St.Mary school",
  "A.G Church Asansol",
  "St. VINCENT SCHOOL",
  "Loretta convent",
  "Burnpir Riverside"
];

const classes = [
  "Pre Nursery", "Nursery", "LKG", "UKG",
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
];

const subjects = ["English", "Hindi", "Math"];

const insertSchoolsAndBooks = async () => {
  try {
    for (const school of schools) {
      // Insert school
      const schoolDoc = await addDoc(collection(db, "schools"), {
        name: school,
        classes: classes,
      });

      const schoolId = schoolDoc.id;

      // Insert books for each class and subject
      for (const cls of classes) {
        for (const subject of subjects) {
          const bookName = `${school}_${cls}_${subject}`;
          await addDoc(collection(db, "books"), {
            name: bookName,
            school: schoolId,
            class: cls,
            subject,
            price: Math.floor(Math.random() * 500) + 100 // Random price between 100 and 600
          });
        }
      }

      console.log(`Data inserted for school: ${school}`);
    }

    console.log("All data inserted successfully!");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

// Run the function
insertSchoolsAndBooks();
