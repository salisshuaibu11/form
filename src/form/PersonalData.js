import React from "react";
import useForm from "../lib/useForm";

import "../styles/PersonalData.css";

const PersonalData = (props) => {
  const {inputs, handleChange} = props;

  return (
    <>
      <div className="form__group form__group__personal__data">
        <span className="intake">Section One: Personal Data</span>
        <p>
          <label htmlFor="surname">
            <input
              id="surname"
              value={inputs.surname}
              name="surname"
              onChange={handleChange}
              placeholder="Surname"
              type="text" />
          </label>
          <label htmlFor="oternames">
            <input
              id="othernames"
              value={inputs.othernames}
              name="othernames"
              onChange={handleChange}
              placeholder="Othernames"
              type="text"
              />
          </label>
          <label htmlFor="sex">
            <input
              id="sex"
              value={inputs.sex}
              name="sex"
              onChange={handleChange}
              placeholder="Sex"
              type="text" />
          </label>
          <label htmlFor="dob">
            <input
              id="dob"
              name="dob"
              value={inputs.dob}
              onChange={handleChange}
              placeholder="Date Of Birth"
              type="text" />
          </label>
          <label htmlFor="nationality">
            <input
              id="nationality"
              name="nationality"
              value={inputs.nationality}
              placeholder="Nationality"
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="countryOfResidence">
            <input
              id="name"
              name="countryOfResidence"
              value={inputs.countryOfResidence}
              placeholder="Country Of Residence"
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="contactAddress">
            <input
              id="contactAddress"
              name="contactAddress"
              value={inputs.contactAddress}
              placeholder="Contact Address"
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="home">
            <input
              id="home"
              name="home"
              value={inputs.home}
              placeholder="Home"
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="district">
            <input
            style={{width: '80%'}}
              id="district"
              name="district"
              value={inputs.district}
              placeholder="Home District"
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="village">
            <input
              id="village"
              name="village"
              value={inputs.village}
              placeholder="Village or CLI"
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="subCountry">
            <input
              id="subCountry"
              name="subCountry"
              value={inputs.subCountry}
              placeholder="Sub Country"
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="country">
            <input
              id="country"
              name="country"
              value={inputs.country}
              placeholder="Country"
              onChange={handleChange}
              type="text" />
          </label>
          <label htmlFor="maritalStatus">
            <input
              id="maritalStatus"
              name="maritalStatus"
              value={inputs.maritalStatus}
              onChange={handleChange}
              placeholder="Marital Status"
              type="text" />
          </label>
          <label htmlFor="nameOfSpouse">
            <input
              id="nameOfSpouse"
              name="nameOfSpouse"
              value={inputs.nameOfSpouse}
              onChange={handleChange}
              placeholder="Name of Spouse"
              type="text" />
          </label>
          <label htmlFor="sponsor">
            <input
              style={{width: '100%'}}
              id="sponsor"
              name="sponsor"
              value={inputs.sponsor}
              style={{width: "80%"}}
              placeholder="Sponsor"
              onChange={handleChange}
              type="text" />
          </label>
        </p>
      </div>

    </>
  )
}

export default PersonalData;
