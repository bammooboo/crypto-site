import { useState } from 'react';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (event) => {
    const { dataset, value } = event.target;

    setValues({
      ...values,
      [dataset.query]: value
    });

    setTouched({
      ...touched,
      [dataset.query]: true
    });
  }

  const handleFocus = (event) => {
    const { dataset } = event.target;

    setTouched({
      ...touched,
      [dataset.query]: true
    });
  }

  const handleBlur = (event) => {
    const { dataset, value } = event.target;

    const { [dataset.query]: removedError, ...rest } = errors;

    const error = validate[dataset.query](value);

    setErrors({
      ...rest,
      ...(error && { [dataset.query]: touched[dataset.query] && error})
    });
  }

  return {
    errors,
    handleBlur,
    handleChange,
    handleFocus,
    touched,
    values
  };
};

export default useForm;