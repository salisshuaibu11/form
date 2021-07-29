import React from "react";

const Accomodation = (props) => {
  const { inputs, handleChange } = props;
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
          <input
            onChange={handleChange}
            name="website"
            value="website"
            type="checkbox"
            id="website"
          />
        </label>
        <label htmlFor="media">
         b) Media (TV, Radio, Newspaper etc.)
          <input
            onChange={handleChange}
            name="media"
            value={inputs.media}
            type="text"
            id="media"
          />
        </label>
        <label htmlFor="exhibitions">
         c) Exhibitions
          <input
            name="exhibitions"
            value={inputs.exhibitions}
            onChange={handleChange}
            type="text"
            id="exhibitions"
            />
        </label>
      </p>
      <p>
        <label htmlFor="others">
         b) Others (Specify)
          <input onChange={handleChange} name="" value="" style={{width: '80%'}} type="text" id="others"/>
        </label>
      </p>
      <div>
        <p>
          <span>5.0</span>
          <label htmlFor="sponsorship">
           Sponsorship:
            <input type="text" id="sponsorship"/>
          </label>

          <label htmlFor="self">
           Self:
            <input
              onChange={handleChange}
              value="self"
              name="self"
              type="checkbox"
              id="self"/>
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
            <input
              onChange={handleChange}
              name="name"
              value={inputs.name}
              style={{width: "40%"}}
              type="text"
              id="name"
            />
          </label>

          <label htmlFor="date">
           Date:
            <input
              onChange={handleChange}
              name="date"
              value={inputs.date}
              style={{width: "40%"}}
              type="text"
              id="date"
            />
          </label>
        </p>
      </div>
    </div>
  )
}

export default Accomodation;
