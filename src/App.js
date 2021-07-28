import React from "react";
import "./app.css";
import PersonalData from "./form/PersonalData";
import Education from "./form/Education";
import useForm from "./lib/useForm";

const App = () => {
  const { inputs, handleChange } = useForm({
    qualifications: "",
    positions: "",
    year: "",
    indexNo: "",
    examiningAuthority: "",
    surname: '',
    othernames: '',
    sex: '',
    dob: "",
    nationality: "",
    countryOfResidence: "",
    contactAddress: "",
    home: "",
    district: "",
    village: "",
    subCountry: "",
    country: "",
    maritalStatus: "",
    nameOfSpouse: "",
    sponsor: "",
    address: "",
    telephone: "",
    mobile: "",
    email: "",
    studentNumber: "",
    examsFieldsOne: "",
    examsFieldsTwo: "",
    examsFieldsThree: "",
    examsFieldsFour: "",
    examsFieldsFive: "",
    examsFieldsSix: "",

    paperOneFieldOne: "",
    paperOneFieldTwo: "",
    paperOneFieldThree: "",
    paperOneFieldFour: "",
    paperOneFieldFive: "",
    paperOneFieldSix: "",

    paperTwoFieldOne: "",
    paperTwoFieldTwo: "",
    paperTwoFieldThree: "",
    paperTwoFieldFour: "",
    paperTwoFieldFive: "",
    paperTwoFieldSix: "",

    paperThreeFieldOne: "",
    paperThreeFieldTwo: "",
    paperThreeFieldThree: "",
    paperThreeFieldFour: "",
    paperThreeFieldFive: "",
    paperThreeFieldSix: "",

    paperFourFieldOne: "",
    paperFourFieldTwo: "",
    paperFourFieldThree: "",
    paperFourFieldFour: "",
    paperFourFieldFive: "",
    paperFourFieldSix: "",

    paperFiveFieldOne: "",
    paperFiveFieldTwo: "",
    paperFiveFieldThree: "",
    paperFiveFieldFour: "",
    paperFiveFieldFive: "",
    paperFiveFieldSix: "",

    paperSixFieldOne: "",
    paperSixFieldTwo: "",
    paperSixFieldThree: "",
    paperSixFieldFour: "",
    paperSixFieldFive: "",
    paperSixFieldSix: "",

    resultFieldOne: "",
    resultFieldTwo: "",
    resultFieldThree: "",
    resultFieldFour: "",
    resultFieldFive: "",
    resultFieldSix: "",

    pointFieldOne: "",
    pointFieldTwo: "",
    pointFieldThree: "",
    pointFieldFour: "",
    pointFieldFive: "",
    pointFieldSix: "",

    dateFieldOne: "",
    dateFieldTwo: "",
    dateFieldThre: "",

    institutionFieldOne: "",
    institutionFieldTwo: "",
    institutionFieldThre: "",

    qualificationsFieldOne: "",
    qualificationsFieldTwo: "",
    qualificationsFieldThre: "",
  })

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

      <PersonalData inputs={inputs} handleChange={handleChange}/>
      <Education inputs={inputs} handleChange={handleChange}/>
    </form>
  );
}

export default App;
