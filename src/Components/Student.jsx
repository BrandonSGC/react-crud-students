import React from "react";
import { useFetch } from "../hooks/useFetch";

export const Student = ({ studentData }) => {
  const { id, name, surname, subject } = studentData;

  const { deleteStudent } = useFetch();

  const handleEdit = () => {
    console.log('Editing...');
    // Get student data.

    // Load student information into textbox
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
