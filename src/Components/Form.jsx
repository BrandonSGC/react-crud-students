import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const Form = () => {
  const {createStudent} = useFetch();
  const [student, setStudent] = useState({
    name: '',
    surname: '',
    subject: ''
  })

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createStudent(student);
  }

  const handleInputChange = (evt) => {
    const propertyName = evt.target.name;
    const value = evt.target.value;
    setStudent({
      ...student,
      [propertyName]: value,
    })
  }

  return (
    <form className="form">
      
      <fieldset className="form__fieldset">

        <div className="form__field">
          <label className="form__label" htmlFor="name">Name:</label>
          <input onChange={handleInputChange} className="form__input" type="text" id="name" name="name" />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="surname">Surname:</label>
          <input onChange={handleInputChange} className="form__input" type="text" id="surname" name="surname" />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="name">Subject in course:</label>
          <input onChange={handleInputChange} className="form__input" type="text" id="subject" name="subject" />
        </div>
      </fieldset>

      <div className="buttons">
        <button onClick={handleSubmit} className="button button-create">Create Student</button>
        <button className="button button-cancel">Cancel</button>
      </div>
    </form>
  );
};
