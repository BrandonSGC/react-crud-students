export const Form = () => {

  

  return (
    <form className="form">
      
      <fieldset className="form__fieldset">

        <div className="form__field">
          <label className="form__label" htmlFor="name">Name:</label>
          <input className="form__input" type="text" id="name" name="name" />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="surname">Surname:</label>
          <input className="form__input" type="text" id="surname" name="surname" />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="name">Subject in course:</label>
          <input className="form__input" type="text" id="subject" name="subject" />
        </div>
      </fieldset>

      <div className="buttons">
        <button className="button button-create">Create Student</button>
        <button className="button button-cancel">Cancel</button>
      </div>
    </form>
  );
};
