import { useEffect, useState } from "react"

async function getStudents() {
  const url = 'http://localhost:3000/students';

  const response = await fetch(url);
  console.log(response);

  const data = await response.json();
  console.log(data);

  const students = data.map(student => ({
    id: student.id,
    name: student.name,
    surname: student.surname,
    subject: student.subject,
  }));

  return students;
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
  }, []);
  

  return {
    students,
    isLoading
  };
}
