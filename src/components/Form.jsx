import React, { useState } from "react";
import { validFirstName, validLastName, validDob, validEmail } from "../regex";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    dob: false,
    email: false,
  });

  function validate(e) {
    e.preventDefault();
    const regexErrors = {
      firstName: !validFirstName.test(firstName),
      lastName: !validLastName.test(lastName),
      dob: !validDob.test(dob),
      email: !validEmail.test(email),
    };
    setErrors(regexErrors);
    console.log(validFirstName);
    console.log("validate function runs and value of errors is: ", errors);
    setSuccess(true);
  }

  const submitButton = document.getElementsByClassName("submitBtn");

  return (
    <>
      <h4 className="formH4">Enter Contact Details Below</h4>
      <form action="">
        <input
          className="input"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Firstname"
        />
        {errors.firstName && (
          <span className="errorMessage">
            Name can be a maximun of 20 characters
          </span>
        )}

        <input
          className="input"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Lastname"
        />
        {errors.lastName && (
          <span className="errorMessage">
            Name can be a maximum of 20 characters
          </span>
        )}

        <input
          className="input"
          type="date"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
          placeholder="DOB"
        />
        {errors.dob && (
          <span className="errorMessage">
            DOB to be no older than 150 years
          </span>
        )}

        <input
          className="input"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        {errors.email && (
          <span className="errorMessage">Invalid Email Address</span>
        )}

        <button id="submitBtn" type="submit" onClick={(e) => validate(e)}>
          Submit
        </button>

        {
          !errors.firstName &&
            !errors.lastName &&
            !errors.dob &&
            !errors.email &&
            success && <p className="successMessage">Sent</p>
        }
      </form>
    </>
  );
}

export default Form;
