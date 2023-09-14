import { useFetch } from "../hooks/useFetch";
import { Student } from "./Student";

export const Table = () => {
  const { students, isLoading } = useFetch();

  return (
    <>
      {
        isLoading && (<h1>Loading...</h1>)
      }
      
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            students.map((student) => (
              <Student key={student.id} studentData={student} />
            ))
          }
        </tbody>
      </table>
    </>
  );
};
