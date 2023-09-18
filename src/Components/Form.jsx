import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const Form = () => {
  const { createStudent } = useFetch();
  const [student, setStudent] = useState({
    name: "",
    surname: "",
    subject: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (validateInputs(student)) {
      createStudent(student);
    } else {
      console.log('Please fill the fields correctly');
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
  // Validate inputs.
  const { name, surname, subject } = student;

  return name.trim() != '' && isNaN(name) && surname.trim() != '' && isNaN(surname) && subject.trim() != '' && isNaN(subject);

  }

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

      <div className="buttons">
        <button onClick={handleSubmit} className="button button-create">
          Create Student
        </button>
        <button className="button button-cancel">Cancel</button>
      </div>
    </form>
  );
};
