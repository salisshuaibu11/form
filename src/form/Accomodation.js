import React from "react";
import "../styles/accommodation.css";

const Accomodation = (props) => {
  const { inputs, handleChange } = props;
  return (
    <div className="form__group form__group__education__accomodation">
      <h2 style={{fontSize: "18px"}}>
        <span className="intake" style={{display: "block"}}>
          Section Four: The university offers accommodation to all first year students at an
          affordable fee. (See attached form for details).
        </span>
      </h2>

      <p>
        How did you get to know about Equator University of Science And Technology
        (EQUSaT)? Tick in the box / write in the space provided.
      </p>
      <p>
        <label htmlFor="website">
          Website
          <input
            onChange={handleChange}
            name="website"
            placeholder="Website"
            value={inputs.website}
            type="checkbox"
            id="website"
          />
        </label>
        <label htmlFor="media">
          <input
            onChange={handleChange}
            name="media"
            value={inputs.media}
            placeholder="Media (TV, Radio, Newspaper etc.)"
            type="text"
            id="media"
          />
        </label>
        <label htmlFor="exhibitions">
          <input
            name="exhibitions"
            value={inputs.exhibitions}
            onChange={handleChange}
            placeholder="Exhibitions"
            type="text"
            id="exhibitions"
            />
        </label>
        <label htmlFor="others">
          <input
            onChange={handleChange}
            name="others"
            value={inputs.others}
            placeholder="Others (specify)"
            type="text"
            id="others"
          />
        </label>
        <label htmlFor="sponsorship">
          <input
            name="sponsorship"
            value={inputs.sponsorship}
            onChange={handleChange}
            placeholder="Sponsorship"
            type="text"
            id="sponsorship"
          />
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
          <input
            placeholder="Sponsored"
            type="text"
            onChange={handleChange}
            name="sponsored"
            value={inputs.sponsored}
            id="sponsored"
          />
        </label>
      </p>
      <div>
        <p>I declare that all the information given in this application form is correct</p>
        <p className="declaration">
          <label htmlFor="name" style={{marginRight: "2rem"}}>
            <input
              onChange={handleChange}
              name="name"
              value={inputs.name}
              placeholder="Name"
              type="text"
              id="name"
            />
          </label>

          <label htmlFor="date">
            <input
              onChange={handleChange}
              name="date"
              value={inputs.date}
              placeholder="Date"
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
