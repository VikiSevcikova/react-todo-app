export const getFromLocalStorage = (value) => {
    if(localStorage.getItem(value)){
      return JSON.parse(localStorage.getItem(value));
    }else{
      return null;
    }
 }

export const saveToLocalStorage = (key, value) => {
   localStorage.setItem(key,JSON.stringify(value));
}

export const validateEmail = (values, setValues) => {
    console.log('validate mail')
  if (!values.email) {
      setValues({
          ...values,
          emailError: "email is required"
      });
  } else {
      if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
          console.log('email is ok')
          setValues({
              ...values,
              emailError: null
          });
      } else {
          console.log('invalid email')
          setValues({
              ...values,
              emailError: "Please enter a valid email address"
          });
      }
  }
}

export const validate = (value, values, setValues) => {
  setValues({
      ...values,
      [`${value}Error`]: values[value] === "" ? `${value} is required` : null
  });
}