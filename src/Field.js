import React from "react";

const Field = ({ inputs, handleChange }) => {
  return (
      <input
        id={inputs.surname}
        value={inputs.surname}
        name={inputs.surname}
        onChange={handleChange}
        type="text" />
  )
}

export default Field;
