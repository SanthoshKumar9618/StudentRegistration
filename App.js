import React, { useState } from 'react';
import StudentForm from './components/StudentFrom';
import StudentList from './components/StudentList';

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <h1>Student Registration Form</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} /> 
    </div>
  );
};

export default App;
