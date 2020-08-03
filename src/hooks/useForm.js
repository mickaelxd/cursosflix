import { useState } from 'react';

function useForm(InitialValues) {
  const [values, setValues] = useState(InitialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function clearForm() {
    setValues(InitialValues);
  }

  return {
    values,
    clearForm,
    handleChange,
  };
}

export default useForm;
