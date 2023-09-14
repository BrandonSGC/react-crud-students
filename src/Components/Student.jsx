import React from "react";

export const Student = ({ studentData }) => {
  const { id, name, surname, subject } = studentData;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{subject}</td>
      <td className="buttons-student">
        <button className="button-delete">Delete</button>
        <button className="button-edit">Edit</button>
      </td>
    </tr>
  );
};
