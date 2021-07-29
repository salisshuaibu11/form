import React, { useEffect } from "react";
import "./app.css";

import PersonalData from "./form/PersonalData";
import Education from "./form/Education";
import Programmes from "./form/Programmes";
import Accomodation from "./form/Accomodation";

import useForm from "./lib/useForm";

const App = () => {
  const { inputs, handleChange } = useForm({
    qualifications: "",
    positions: "",
    intake: "",
    sessions: "",
    media: "",
    website: "",
    exhibitions: "",
    self: "",
    sponsorship: "",
    name: "",
    date: "",
    certificateYear: "",
    certificateIndexNo: "",
    certificateAuthority: "",
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
    eng: "",
    el: "",
    re: "",
    h: "",
    g: "",
    comp: "",
    p: "",
    c: "",
    b: "",
    m: "",
    tcg: "",
    art: "",
    mus: "",
    agr: "",
    com: "",
    accs: "",
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

  useEffect(() => {
    let tabsContainer = document.querySelector("#tabs");
    let tabTogglers = tabsContainer.querySelectorAll("a");

    tabTogglers.forEach((toggler) => {
      toggler.addEventListener("click", (e) => {
        e.preventDefault();

        tabTogglers.forEach((tabs) => tabs.classList.remove("hide"));

        let tabName = e.target.hash; //.split("#")[1];
        let tabContents = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {
          tabContents.children[i].style.display = "none";
          if ("#" + tabContents.children[i].id === tabName) {
            console.log(tabContents)
              continue;
          }
          tabContents.children[i].classList.add("hide");
        }
        e.target.parentElement.querySelector(`a[href="${tabName}"]`).style.display = "block"
      });
    });
  })

  return (
    <form className="form">
      <div className="form__group">
        <span className="intake">Choice of Intake:</span>

        <label htmlFor="aprilOrMay">
          APRIL/MAY
          <input
            onChange={handleChange}
            value="APRIL/MAY"
            name="intake"
            type="radio"
            id="aprilOrMay"/>
        </label>
        <label htmlFor="augustOrSeptember">
          AUG/SEP
          <input
            onChange={handleChange}
            value="AUGUST/SEPTEMBER"
            name="intake"
            type="radio"
            id="augustOrSeptember"
          />
        </label>
      </div>

      <div className="form__group form__group__sessions">
        <span className="intake">Sessions:</span>

        <label htmlFor="regular">
          Regular
          <input onChange={handleChange} value="regular" type="radio" name="sessions" id="regular"/>
        </label>
        <label htmlFor="weekend">
          Weekend
          <input onChange={handleChange} value="weekend" type="radio" name="sessions" id="weekend"/>
        </label>
        <label htmlFor="evening">
          Evening
          <input onChange={handleChange} value="evening" type="radio" name="sessions" id="evening"/>
        </label>
        <label htmlFor="online">
          Online
          <input onChange={handleChange} value="online" type="radio" name="sessions" id="online"/>
        </label>
      </div>

      <div id="tabs" className="tabs">
        <a href="#personalData">Personal Data</a>
        <a href="#education">Education / Background</a>
        <a href="#education">Programmes</a>
        <a href="#education">Accomodation/Declaration</a>
      </div>
      <div id="tab-contents">
        <div id="personalData">
          <PersonalData inputs={inputs} handleChange={handleChange}/>
        </div>
        <div id="education" className="hide">
            <Education inputs={inputs} handleChange={handleChange}/>
        </div>
        <div id="programmes" className="hide">
            <Programmes inputs={inputs} handleChange={handleChange}/>
        </div>
        <div id="accommodation" className="hide">
            <Accomodation inputs={inputs} handleChange={handleChange}/>
        </div>
      </div>
    </form>
  );
}

export default App;
