import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Registered Students</h2>
      {students.length > 0 ? (
        students.map((student, index) => (
          <div key={index}>
            <h3>Name: {student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Course: {student.course}</p>
          </div>
        ))
      ) : (
        <p>No students registered yet.</p>
      )}
    </div>
  );
};

export default StudentList;
