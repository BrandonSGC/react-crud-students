import { Form } from "./Components/Form";
import { Table } from "./Components/Table";
import { Title } from "./Components/Title";
import "./styles.css";

export const App = () => {
  return (
    <div className="container">
      <Title title="Tarea Sitios Web" />
      
      <main className="display">
        <div className="column">
          <h2 className="text-center">Student Administration</h2>
          <Form />
        </div>

        <div className="column">
          <h2 className="text-center">View Students</h2>
          <Table />
        </div>
      </main>
    </div>
  );
};
