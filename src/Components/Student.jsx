import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";


// async function getStudentById(id) {
//   const url = `http://localhost:3000/students/${id}`;

//   const response = await fetch(url);

//   const data = await response.json();

//   const student = data[0];

//   console.log(student);

//   return student;
// }

export const Student = ({ studentData }) => {
  const { id, name, surname, subject } = studentData;

  const { deleteStudent, getStudentByIdInfo, studentInfo } = useFetch();
  // const [studentInfo, setStudentInfo] = useState({
  //   id:'',
  //   name:'',
  //   surname:'',
  //   subject:''
  // })

  // async function getStudentByIdInfo(id) {
  //   const student = await getStudentById(id);
  //   setStudentInfo(student);
  // }


  const handleEdit = async () => {
    // Get student data.
    await getStudentByIdInfo(id);
    
    console.log(studentInfo);

    // Send data to Form

  }

  const handelDelete = () => {
    deleteStudent(id);
  }

  return (
    <tr>
      {/* <td>{id}</td> */}
      <td>{name}</td>
      <td>{surname}</td>
      <td>{subject}</td>
      <td className="buttons-student">
        <button onClick={handelDelete} className="button-delete">Delete</button>
        <button onClick={handleEdit} className="button-edit">Edit</button>
      </td>
    </tr>
  );
};
