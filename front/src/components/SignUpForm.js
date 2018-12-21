import React from "react";
import { Field, reduxForm } from "redux-form";

let SignUpForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">SignUp</button>
    </form>
  );
};

SignUpForm = reduxForm({
  form: "signUp"
})(SignUpForm);

export default SignUpForm;
