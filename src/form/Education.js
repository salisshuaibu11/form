import React from "react";
import useForm from "../lib/useForm";

const EducationAndBackground = (props) => {
  const { inputs, handleChange } = props;
  return (
    <div className="form__group form__group__education__data" style={{marginTop: "2rem"}}>
      <h2 style={{fontSize: "18px"}}>
        <span className="intake" style={{display: "block"}}>
          <span>2.0</span>
          Section Two: Education And Background
        </span>
        <span className="intake" style={{display: "block", textTransform: "capitalize"}}>
          <span>2.1</span> Uganda Advanced Certificate of Education (UACE) or Equivalent
        </span>
      </h2>
      
      <p>
        <span>1.1</span>
        <label htmlFor="year">
          Year:
          <input
            id="year"
            value={inputs.year}
            name="year"
            onChange={handleChange}
            type="text" />
        </label>

        <label htmlFor="indexNo">
          Index Number:
          <input
            id="indexNo"
            value={inputs.indexNo}
            name="indexNo"
            onChange={handleChange}
            type="text"
            />
        </label>

        <label htmlFor="examiningAuthority">
          ExaminingAuthority:
          <input
            id="examiningAuthority"
            value={inputs.examiningAuthority}
            name="examiningAuthority"
            onChange={handleChange}
            type="text" />
        </label>
      </p>

      <p style={{marginBottom: "2rem"}}>
        <table>
          <thead>
            <tr>
              <th scope="col">Examination Papers</th>
              <th scope="col" colSpan="6">Results In Each Paper</th>
              <th scope="col">Overall Results</th>
              <th scope="col">Point for Course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Account">
                <input
                    id="fieldsOne"
                    value={inputs.examsFieldsOne}
                    name="examsFieldsOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td>
                <th>Paper 1</th>
              </td>
              <td>
                <th>Paper 2</th>
              </td>
              <td data-label="Account">
                <th>Paper 3</th>
              </td>
              <td data-label="Account">
                <th>Paper 4</th>
              </td>
              <td data-label="Account">
                <th>Paper 5</th>
              </td>
              <td data-label="Account">
                <th>Paper 6</th>
              </td>
              <td data-label="Account">
                <input type="text" />
              </td>
              <td data-label="Account">
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td data-label="Account">
                <input
                    id="fieldsTwo"
                    value={inputs.examsFieldsTwo}
                    name="examsFieldsTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperOneFieldOne"
                    value={inputs.paperOneFieldOne}
                    name="paperOneFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperTwoFieldOne"
                    value={inputs.paperTwoFieldOne}
                    name="paperTwoFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperThreeFieldOne"
                    value={inputs.paperThreeFieldOne}
                    name="paperThreeFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperFourFieldOne"
                    value={inputs.paperFourFieldOne}
                    name="paperFourFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperFiveFieldOne"
                    value={inputs.paperFiveFieldOne}
                    name="paperFiveFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperSixFieldOne"
                    value={inputs.paperSixFieldOne}
                    name="paperSixFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="resultFieldOne"
                    value={inputs.resultFieldOne}
                    name="resultFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="pointFieldOne"
                    value={inputs.pointFieldOne}
                    name="pointFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
            </tr>
            <tr>
              <td data-label="Account">
                <input
                    id="fieldsThree"
                    value={inputs.examsFieldsThree}
                    name="examsFieldsThree"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperOneFieldTwo"
                    value={inputs.paperOneFieldTwo}
                    name="paperOneFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperTwoFieldTwo"
                    value={inputs.paperTwoFieldTwo}
                    name="paperTwoFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperThreeFieldTwo"
                    value={inputs.paperThreeFieldTwo}
                    name="paperThreeFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperFourFieldTwo"
                    value={inputs.paperFourFieldTwo}
                    name="paperFourFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperFiveFieldTwo"
                    value={inputs.paperFiveFieldTwo}
                    name="paperFiveFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="paperSixFieldTwo"
                    value={inputs.paperSixFieldTwo}
                    name="paperSixFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="resultFieldTwo"
                    value={inputs.resultFieldTwo}
                    name="resultFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td data-label="Account">
                <input
                    id="pointFieldTwo"
                    value={inputs.pointFieldTwo}
                    name="pointFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
            </tr>
          </tbody>
        </table>
      </p>

      <p>
        <p>
          <span style={{marginRight: '2rem'}}>2.2</span>
          <span>Uganda Certificate Of Education (UCE) or Equivalent</span>
        </p>
        <label htmlFor="certificateYear">
          Year:
          <input
            id="certificateYear"
            value={inputs.certificateYear}
            name="certificateYear"
            onChange={handleChange}
            type="text" />
        </label>

        <label htmlFor="certificateIndexNo">
          Index Number:
          <input
            id="certificateIndexNo"
            value={inputs.certificateIndexNo}
            name="certificateIndexNo"
            onChange={handleChange}
            type="text"
            />
        </label>

        <label htmlFor="certificateAuthority">
          ExaminingAuthority:
          <input
            id="certificateAuthority"
            value={inputs.certificateAuthority}
            name="certificateAuthority"
            onChange={handleChange}
            type="text" />
        </label>
        <p>Enter Result grades (figures) for UCE in boxes below</p>
        <table>
          <thead>
            <th>Eng</th>
            <th>EL</th>
            <th>RE</th>
            <th>H</th>
            <th>G</th>
            <th>COMP</th>
            <th>P</th>
            <th>C</th>
            <th>B</th>
            <th>M</th>
            <th>TCG</th>
            <th>ART</th>
            <th>MUS</th>
            <th>AGR</th>
            <th>COM</th>
            <th>ACCs</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                    id="eng"
                    value={inputs.eng}
                    name="eng"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="el"
                    value={inputs.el}
                    name="el"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="re"
                    value={inputs.re}
                    name="re"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="h"
                    value={inputs.h}
                    name="h"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="g"
                    value={inputs.g}
                    name="g"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="comp"
                    value={inputs.comp}
                    name="comp"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="p"
                    value={inputs.p}
                    name="p"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="c"
                    value={inputs.c}
                    name="c"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="b"
                    value={inputs.b}
                    name="b"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="m"
                    value={inputs.m}
                    name="m"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="tcg"
                    value={inputs.tcg}
                    name="tcg"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="art"
                    value={inputs.art}
                    name="art"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="mus"
                    value={inputs.mus}
                    name="mus"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="agr"
                    value={inputs.agr}
                    name="agr"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="com"
                    value={inputs.com}
                    name="com"
                    onChange={handleChange}
                    type="text"
                />
              </td>
              <td>
                <input
                    id="accs"
                    value={inputs.accs}
                    name="accs"
                    onChange={handleChange}
                    type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </p>


      <p>
        <label htmlFor="qualifications" style={{fontSize: '20px'}}>
          <span style={{marginRight: "2rem"}}>2.3</span>
          <span>If offered qualifications other than UCE and UACE give details below
          (Attached certified documents of paper and use separate paper if more space
          is needed)</span>
          <input
            style={{width: "100%", display: "block"}}
            id="qualifications"
            value={inputs.qualifications}
            name="qualifications"
            onChange={handleChange}
            type="text" />
        </label>
        <table style={{marginTop: '1rem'}}>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Name Of School / Institution</th>
              <th scope="col">Qualifications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                    id="dateFieldOne"
                    value={inputs.dateFieldOne}
                    name="dateFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td>
                <input
                    id="institutionFieldOne"
                    value={inputs.institutionFieldOne}
                    name="institutionFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td>
                <input
                    id="qualificationsFieldOne"
                    value={inputs.qualificationsFieldOne}
                    name="qualificationsFieldOne"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
            </tr>
            <tr>
              <td>
                <input
                    id="dateFieldTwo"
                    value={inputs.dateFieldTwo}
                    name="dateFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td>
                <input
                    id="institutionFieldTwo"
                    value={inputs.institutionFieldTwo}
                    name="institutionFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td>
                <input
                    id="qualificationsFieldTwo"
                    value={inputs.qualificationsFieldTwo}
                    name="qualificationsFieldTwo"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
            </tr>
            <tr>
              <td>
                <input
                    id="dateFieldThree"
                    value={inputs.dateFieldThree}
                    name="dateFieldThree"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td>
                <input
                    id="institutionFieldThree"
                    value={inputs.institutionFieldThree}
                    name="institutionFieldThree"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
              <td>
                <input
                    id="qualificationsFieldThree"
                    value={inputs.qualificationsFieldThree}
                    name="qualificationsFieldThree"
                    onChange={handleChange}
                    type="text"
                    />
              </td>
            </tr>
          </tbody>
        </table>
      </p>

      <p>
        <span style={{marginRight: '2rem'}}>2.4</span>
          <label htmlFor="year">
            Positions of Responsiblity held (e.g. prefect, Sports Captain etc):
            <input
              style={{display: "block", width: "100%"}}
              id="positions"
              value={inputs.positions}
              name="positions"
              onChange={handleChange}
              type="text" />
        </label>
      </p>
    </div>
  )
}

export default EducationAndBackground;
