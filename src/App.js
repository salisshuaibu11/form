import React from "react";
import "./app.css";
import useForm from "./lib/useForm";
import FormData from "./FormData";

const App = () => {
  const {inputs, handleChange} = useForm({
    surname: '',
    othernames: '',
    sex: '',
    dob: "",
    nationality: "",
    countryOfResidence: "",
    contactAddress: "",
    home: "",
  });
  return (
    <form className="form">
      <div className="form__group">
        <span className="intake">Choice of Intake:</span>

        <label htmlFor="aprilOrMay">
          APRIL/MAY
          <input type="checkbox" id="aprilOrMay"/>
        </label>
        <label htmlFor="augustOrSeptember">
          AUG/SEP
          <input type="checkbox" id="augustOrSeptember"/>
        </label>
      </div>

      <div className="form__group form__group__sessions">
        <span className="intake">Sessions:</span>

        <label htmlFor="regular">
          Regular
          <input type="checkbox" id="regular"/>
        </label>
        <label htmlFor="weekend">
          Weekend
          <input type="checkbox" id="weekend"/>
        </label>
        <label htmlFor="evening">
          Evening
          <input type="checkbox" id="evening"/>
        </label>
        <label htmlFor="online">
          Online
          <input type="checkbox" id="online"/>
        </label>
      </div>

      <div className="form__group form__group__personal__data">
        <span className="intake">Section One: Personal Data</span>

        <p>
          <span>1.1</span>
          <label htmlFor="surname">
            Surname:
            <input
              id="surname"
              value={inputs.surname}
              name="surname"
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="oternames">
            Othernames:
            <input
              id="othernames"
              value={inputs.othernames}
              name="othernames"
              onChange={handleChange}
              type="text"
              />
          </label>
          <label htmlFor="sex">
            Sex:
            <input
              id="sex"
              value={inputs.sex}
              name="sex"
              onChange={handleChange}
              type="text" />
          </label>
        </p>

        <p>
          <span>1.2</span>
          <label htmlFor="dob">
            Date Of Birth:
            <input
              id="dob"
              name="dob"
              value={inputs.dob}
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="nationality">
            Nationality:
            <input
              id="nationality"
              name="nationality"
              value={inputs.nationality}
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="countryOfResidence">
            Conuntry Of Residence:
            <input
              id="name"
              name="countryOfResidence"
              value={inputs.countryOfResidence}
              onChange={handleChange}
              type="text" />
          </label>
        </p>

        <p>
          <span>1.2</span>
          <label htmlFor="contactAddress">
            Contact Address:
            <input
              id="contactAddress"
              name="contactAddress"
              value={inputs.contactAddress}
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="home">
            Home:
            <input
              id="home"
              name="home"
              value={inputs.home}
              onChange={handleChange}
              type="text" />
          </label>
        </p>
      </div>
    </form>
  );
}

export default App;
