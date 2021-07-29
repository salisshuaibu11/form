import React from "react";

const Accomodation = () => {
  return (
    <div className="form__group form__group__education__accomodation">
      <h2 style={{fontSize: "18px"}}>
        <span className="intake" style={{display: "block"}}>
          <span style={{marginRight: '2rem'}}>4.0</span>
          Section Four: The university offers accommodation to all first year students at an
          affordable fee. (See attached form for details).
        </span>
      </h2>

      <p>
        <span>4.1</span> How did you get to know about Equator University of Science And Technology
        (EQUSaT)? Tick in the box / write in the space provided.
      </p>
      <p>
        <label htmlFor="website">
         a) Website
          <input type="checkbox" id="website"/>
        </label>
        <label htmlFor="media">
         b) Media (TV, Radio, Newspaper etc.)
          <input type="text" id="media"/>
        </label>
        <label htmlFor="exhibitions">
         c) Exhibitions
          <input type="text" id="exhibitions"/>
        </label>
      </p>
      <p>
        <label htmlFor="others">
         b) Others (Specify)
          <input style={{width: '80%'}} type="text" id="others"/>
        </label>
      </p>
      <div>
        <p>
          <span>5.0</span>
          <label htmlFor="sponsorship">
           Sponsorship:
            <input type="text" id="sponsorship"/>
          </label>

          <label htmlFor="sponsorship">
           Self:
            <input type="checkbox" id="sponsorship"/>
          </label>
          <label htmlFor="sponsored">
           Sponsored:
            <input type="text" id="sponsored"/>
          </label>
        </p>
      </div>
      <div>
        <span>6.0 Section Five: Declaration</span>
        <p>I decale that all the information given in this application form is correct</p>
        <p>
          <label htmlFor="name">
           Name:
            <input style={{width: "40%"}} type="text" id="name"/>
          </label>

          <label htmlFor="data">
           Date:
            <input style={{width: "40%"}} type="text" id="date"/>
          </label>
        </p>
      </div>
    </div>
  )
}

export default Accomodation;
