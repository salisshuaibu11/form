import { useState } from "react";

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;

    setInputs({
      // copy the exisiting state
      ...inputs,
      [name]: value,
    });
  };

  return {
    inputs,
    handleChange
  }
}
