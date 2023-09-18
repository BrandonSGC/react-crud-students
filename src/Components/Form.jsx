import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Alert } from "./alert";

export const Form = () => {
  const { createStudent } = useFetch();

  const [student, setStudent] = useState({
    name: "",
    surname: "",
    subject: "",
  });

  const [alert, setAlert] = useState({
    type: "",
    message: "",
    show: false,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (validateInputs(student)) {
      createStudent(student);
      setAlert({
        type: "success",
        message: "Student created successfully!",
        show: "true",
      });
    } else {
      setAlert({
        type: "error",
        message: "Please fill the fields correctly",
        show: "true",
      });
    }
  };

  const handleInputChange = (evt) => {
    const propertyName = evt.target.name;

    const value = evt.target.value;
    setStudent({
      ...student,
      [propertyName]: value,
    });
  };

  const validateInputs = (student) => {
    const { name, surname, subject } = student;
    return (
      name.trim() != "" &&
      isNaN(name) &&
      surname.trim() != "" &&
      isNaN(surname) &&
      subject.trim() != "" &&
      isNaN(subject)
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({
        ...alert,
        show: false,
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [alert.show]);

  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Name:
          </label>
          <input
            onChange={handleInputChange}
            className="form__input"
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="surname">
            Surname:
          </label>
          <input
            onChange={handleInputChange}
            className="form__input"
            type="text"
            id="surname"
            name="surname"
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="subject">
            Subject in course:
          </label>
          <input
            onChange={handleInputChange}
            className="form__input"
            type="text"
            id="subject"
            name="subject"
          />
        </div>
      </fieldset>

      {alert.show && <Alert data={alert} />}

      <div className="buttons">
        <button onClick={handleSubmit} className="button button-create">
          Create Student
        </button>
        <button className="button button-cancel">Cancel</button>
      </div>
    </form>
  );
};
