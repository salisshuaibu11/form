import React from "react";

const Programmes = () => {
  return (
    <div className="form__group form__group__education__programmes">
      <h2 style={{fontSize: "18px"}}>
        <span className="intake" style={{display: "block"}}>
          <span style={{marginRight: '2rem'}}>3.0</span>
          Section Three: (Mark/Indicate the choice of the Programmes you are Applying for in Priority with
          1,2,3.. against the Programmes listed below)
        </span>
      </h2>

      <p>
        <table>
          <thead>
            <th>S/N</th>
            <th>List of Academic Programs</th>
            <th>Duration (Years)</th>
            <th>List of Priority</th>
          </thead>
          <tbody>
            <tr>
              <td>(a)</td>
              <td>Bachelor of Bussiness Administration (BBA)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Bachelor of Information Technology</td>
              <td>3yrs</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>BACHELOR OF MEDICINE AND SURGERY</td>
              <td>5yrs</td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>BACHELOR OF DENTAL SURGERY</td>
              <td>5yrs</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <span>Minimum entry Requirements</span>
        <div>
          <p><span style={{marginRight: '1rem'}}>1.</span>Degrees</p>
          <ul>
            <li>Direct Entry</li>
            <li>Five credits obtained at O'level  and at least 2 principle passes in relevant subjects obtained at A' Level at the same sitting</li>
            <li>Holders of Diploma in relevant fields</li>
          </ul>
        </div>
      </p>
    </div>
  )
}

export default Programmes;
