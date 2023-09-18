import { useEffect, useState } from "react"

async function getStudents() {
  const url = 'http://localhost:3000/students';

  const response = await fetch(url);

  const data = await response.json();

  const students = data.map(student => ({
    id: student.id,
    name: student.name,
    surname: student.surname,
    subject: student.subject,
  }));

  return students;
}

function createStudent(student) {
  fetch('http://localhost:3000/students/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student)
    })
      .then( (resp) => resp.json())
      .then( ({message}) => {
        // Handle Response
        //alert(message);
      })
      .catch( (error) => {
        console.log(error);
      })
}

export const useFetch = () => {

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  async function getStudentsInfo() {
    const students = await getStudents();
    setStudents(students);
    setIsLoading(false);
  }

  useEffect(() => {
    getStudentsInfo();
  }, [students]);

  return {
    students,
    isLoading,
    createStudent,
  };
}
