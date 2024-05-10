import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { login } from '../redux/user.reducer'; // Ensure the correct path

function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        // Create a FormData object to send data as form data
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("social_auth_type", "normal"); // Hardcoded field

        axios.post('https://sandbox.practical.me/api/login', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          if (response.data.isSuccess) {
            dispatch(login(response.data.data)); // Assuming `data` contains the auth token and other relevant data
          } else {
            alert('Login failed: ' + response.data.message);
          }
          setSubmitting(false);
        })
        .catch(error => {
          console.error('Login error:', error);
          alert('Login error: ' + error);
          setSubmitting(false);
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <Field type="password" name="password" placeholder="Password" />
          <button type="submit" disabled={isSubmitting}>Login</button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
