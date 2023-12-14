import React from 'react'
import Header from '../../components/header/Header'
import './Form.css'
// Formik
import { Formik, Field } from 'formik'
import * as yup from 'yup'

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: ""
}

// This Schema is going to define the validation logic for each field that we're using
// yup: provides lots of easily accessible pre made validation function
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const userSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required('required'),
  address1: yup.string().required('required'),
  address2: yup.string().required('required')
})

export const Form = () => {
  const handleSubmit = (values) => {
    console.log(values);
    
  }
  return (
    <div>
      <Header title='CREATE USER' subtitle='Create a New User Profile' />
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {/* All of these values comes from Formik component, And this Arrow function allows us to use these values inside our form component*/}
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className='form-container'>
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                placeholder='First Name'
              />
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                placeholder='Last Name'
              />
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                placeholder='Email'
              />
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                placeholder='Contact Number'
              />
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                placeholder='Address 1'
              />
              <input
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                placeholder='Address 2'
            />
            <button>
              CREATE NEW USER
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}






// In MUI:
// <TextField
  // fullWidth
  // variant="filled"
  // type="text"
  // label="First Name"
  // onBlur={handleBlur}
  // onChange={handleChange}
  // value={values.firstName}
  // name="firstName"
  // error={!!touched.firstName && !!errors.firstName}
  // helperText={touched.firstName && errors.firstName}
  // sx={{ gridColumn: "span 2" }}
// />