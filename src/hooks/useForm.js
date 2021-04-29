import { useState } from "react";

const useForm = (init = {}) => {
  const [inputs, setInputs] = useState(init);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const clearForm = () => {
    setInputs({});
  };

  return { inputs, handleChange, clearForm };
};

export default useForm;
