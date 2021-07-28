import React from "react";
import useForm from "../lib/useForm";

const PersonalData = (props) => {
  const {inputs, handleChange} = props;

  return (
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

      <p>
        <span>1.3</span>
        <label htmlFor="district">
          Home District:
          <input
          style={{width: '80%'}}
            id="district"
            name="district"
            value={inputs.district}
            onChange={handleChange}
            type="text" />
        </label>
      </p>

      <p>
        <span>1.4</span>
        <label htmlFor="village">
          Village{"/"}CLI:
          <input
            id="village"
            name="village"
            value={inputs.village}
            onChange={handleChange}
            type="text" />
        </label>
        <label htmlFor="subCountry">
          Sub Country:
          <input
            id="subCountry"
            name="subCountry"
            value={inputs.subCountry}
            onChange={handleChange}
            type="text" />
        </label>
        <label htmlFor="country">
          Country:
          <input
            id="country"
            name="country"
            value={inputs.country}
            onChange={handleChange}
            type="text" />
        </label>
      </p>
      <p>
        <span>1.4</span>
        <label htmlFor="maritalStatus">
          Marital Status:
          <input
            id="maritalStatus"
            name="maritalStatus"
            value={inputs.maritalStatus}
            onChange={handleChange}
            type="text" />
        </label>
        <label htmlFor="nameOfSpouse">
          Name Of Spouse:
          <input
            id="nameOfSpouse"
            name="nameOfSpouse"
            value={inputs.nameOfSpouse}
            onChange={handleChange}
            type="text" />
        </label>
      </p>
      <p>
        <span>1.7</span>
        <label htmlFor="sponsor">
          Sponsor:
          <input
            id="sponsor"
            name="sponsor"
            value={inputs.sponsor}
            style={{width: "80%"}}
            onChange={handleChange}
            type="text" />
        </label>
      </p>
    </div>

  )
}

export default PersonalData;
